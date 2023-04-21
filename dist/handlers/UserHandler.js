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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(10);
    return yield bcrypt.hash(password, salt);
});
class UserHandler {
    constructor(tigris) {
        if (!tigris)
            throw new Error("undefined instance of Tigris.");
        this.tigris = tigris;
    }
    retrieveAllUsers() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield ((_a = this.tigris) === null || _a === void 0 ? void 0 : _a.retrieveAllUsers());
            const cleanUsers = [];
            for (let user of users) {
                cleanUsers.push({ id: user.id, username: user.username, dateCreated: user.dateCreated });
            }
            return cleanUsers;
        });
    }
    createUser(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let formattedUser = {
                username: user.username,
                password: '',
                dateCreated: user.dateCreated
            };
            formattedUser.password = yield hashPassword(user.password);
            return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.createUser(formattedUser);
        });
    }
    changePassword(id, newPassword) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let hashedPassword = yield hashPassword(newPassword);
            return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.changeUserPassword(id, hashedPassword);
        });
    }
    deleteUser(id) {
        var _a;
        return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.deleteUser(id);
    }
    updateUser(user) {
        var _a;
        return (_a = this.tigris) === null || _a === void 0 ? void 0 : _a.updateUser(user);
    }
}
exports.default = UserHandler;
