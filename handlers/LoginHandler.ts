import TigrisService from "../TigrisService";
import SessionHandler from "./SessionHandler";
import UserHandler from "./UserHandler";

const bcrypt = require('bcrypt');
const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export default class LoginHandler {
    private readonly tigris;
    private readonly sessionHandler;
    private readonly userHandler;
    constructor(tigris: TigrisService) {
        if(!tigris) throw new Error("undefined instance of Tigris.")

        this.tigris = tigris;
        this.sessionHandler = new SessionHandler(this.tigris);
        this.userHandler = new UserHandler(this.tigris);
    }

    async loginUser(username: string, rawPassword: string) {
        const loginValidation = await this.validateUserLogin(username, rawPassword);

        if(loginValidation.status == -1) return loginValidation;

        if(loginValidation.matchedUser && loginValidation.matchedUser.id) {
            const userId = loginValidation.matchedUser.id;
            const session = await this.sessionHandler?.createNewSession(userId.toString());

            return {
                status: 1,
                userFeedback: loginValidation.userFeedback,
                sessionId: session.sessionId
            }
        }

        return {
            status: -1,
            userFeedback: "Something unexpected went wrong. Please try again."
        };
    }

    async attemptSessionLogin(sessionId: string) {
        const session = await this.tigris.getSessionForSID(sessionId);

        if(session) {
            return { status: 1, userFeedback: "Successfully logged in.", session: session }
        } else {
            return { status: -1, userFeedback: "Invalid session ID.", user: undefined }
        }
    }

    private async validateUserLogin(username: string, rawPassword: string) {
        const matchedPassword = await this.tigris?.getPasswordForUsername(username);

        if(matchedPassword) {
            const result = await bcrypt.compare(rawPassword, matchedPassword.password)

            if(result == true) {
                return { status: 1, userFeedback: "Successfully validated login.", matchedUser: matchedPassword }
            } else {
                return { status: -1, userFeedback: "The password you have entered is not correct." }
            }
        }

        return {
            status: -1,
            userFeedback: "That username doesn't exist, please check your spelling and try again."
        };
    }

    async handleSessionIdentification(cookies: any) {
        let sid;

        if(cookies) {
            sid = cookies.sid;
        }
    
        if(sid) {
            const sessionLogin = await this.attemptSessionLogin(sid);
    
            if(sessionLogin.status == 1) {
                if(sessionLogin.session) {
                    // @ts-ignore
                    const user = await this.userHandler.getUserForUID(sessionLogin.session.userId);
    
                    if(user) {
                        return user;
                    }
                }
            }
        }

        return undefined;
    }
}