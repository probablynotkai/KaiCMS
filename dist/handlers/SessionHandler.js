"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uid_1 = require("uid");
class SessionHandler {
    constructor(tigris) {
        if (!tigris)
            throw new Error("undefined instance of Tigris.");
        this.tigris = tigris;
    }
    getUserForSessionId(sessionId) {
        var _a;
        return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.getSessionForSID(sessionId);
    }
    createNewSession(userId) {
        var _a;
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 2);
        const sessionData = {
            userId: userId,
            sessionId: (0, uid_1.uid)(25),
            expiryDate: currentDate.toUTCString()
        };
        return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.createNewSession(sessionData);
    }
    renewSession(session) {
        var _a;
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 2);
        const sessionData = Object.assign(Object.assign({}, session), { expiryDate: currentDate.toUTCString() });
        return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.renewSession(sessionData);
    }
}
exports.default = SessionHandler;
