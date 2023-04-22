"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SessionHandler_1 = __importDefault(require("./SessionHandler"));
const UserHandler_1 = __importDefault(require("./UserHandler"));
const bcrypt = require('bcrypt');
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    return yield bcrypt.hash(password, salt);
});
class LoginHandler {
    constructor(tigris) {
        if (!tigris)
            throw new Error("undefined instance of Tigris.");
        this.tigris = tigris;
        this.sessionHandler = new SessionHandler_1.default(this.tigris);
        this.userHandler = new UserHandler_1.default(this.tigris);
    }
    loginUser(username, rawPassword) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const loginValidation = yield this.validateUserLogin(username, rawPassword);
            if (loginValidation.status == -1)
                return loginValidation;
            if (loginValidation.matchedUser && loginValidation.matchedUser.id) {
                const userId = loginValidation.matchedUser.id;
                const session = yield ((_a = this.sessionHandler) === null || _a === void 0 ? void 0 : _a.createNewSession(userId.toString()));
                return {
                    status: 1,
                    userFeedback: loginValidation.userFeedback,
                    sessionId: session.sessionId
                };
            }
            return {
                status: -1,
                userFeedback: "Something unexpected went wrong. Please try again."
            };
        });
    }
    attemptSessionLogin(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = yield this.tigris.getSessionForSID(sessionId);
            if (session) {
                return { status: 1, userFeedback: "Successfully logged in.", session: session };
            }
            else {
                return { status: -1, userFeedback: "Invalid session ID.", user: undefined };
            }
        });
    }
    validateUserLogin(username, rawPassword) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const matchedPassword = yield ((_a = this.tigris) === null || _a === void 0 ? void 0 : _a.getPasswordForUsername(username));
            if (matchedPassword) {
                const result = yield bcrypt.compare(rawPassword, matchedPassword.password);
                if (result == true) {
                    return { status: 1, userFeedback: "Successfully validated login.", matchedUser: matchedPassword };
                }
                else {
                    return { status: -1, userFeedback: "The password you have entered is not correct." };
                }
            }
            return {
                status: -1,
                userFeedback: "That username doesn't exist, please check your spelling and try again."
            };
        });
    }
    handleSessionIdentification(cookies) {
        return __awaiter(this, void 0, void 0, function* () {
            let sid;
            if (cookies) {
                sid = cookies.sid;
            }
            if (sid) {
                const sessionLogin = yield this.attemptSessionLogin(sid);
                if (sessionLogin.status == 1) {
                    if (sessionLogin.session) {
                        // @ts-ignore
                        const user = yield this.userHandler.getUserForUID(sessionLogin.session.userId);
                        if (user) {
                            return user;
                        }
                    }
                }
            }
            return undefined;
        });
    }
}
exports.default = LoginHandler;
