import TigrisService from "../TigrisService";
import {Session} from "../models/Types";
import {uid} from "uid";

export default class SessionHandler {
    tigris;
    constructor(tigris: TigrisService) {
        if(!tigris) throw new Error("undefined instance of Tigris.")

        this.tigris = tigris;
    }

    getUserForSessionId(sessionId: string) {
        return this.tigris?.getUserForSessionId(sessionId);
    }

    createNewSession(userId: string) {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours()+2)

        const sessionData = {
            userId: userId,
            sessionId: uid(25),
            expiryDate: currentDate.toUTCString()
        }

        return this.tigris?.createNewSession(sessionData);
    }

    renewSession(session: Session) {
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours()+2)

        const sessionData = {
            ...session,
            expiryDate: currentDate.toUTCString()
        }

        return this.tigris?.renewSession(sessionData);
    }
}