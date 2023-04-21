import TigrisService from "../TigrisService";
import {CleanUser, RawUser, User} from "../models/Types";

const bcrypt = require('bcrypt');
const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export default class UserHandler {
    tigris;
    constructor(tigris: TigrisService) {
        if(!tigris) throw new Error("undefined instance of Tigris.")

        this.tigris = tigris;
    }

    async retrieveAllUsers() {
        const users = await this.tigris?.retrieveAllUsers();
        const cleanUsers = [];

        for(let user of users) {
            cleanUsers.push({ id: user.id, username: user.username, dateCreated: user.dateCreated });
        }

        return cleanUsers;
    }

    async createUser(user: RawUser) {
        let formattedUser = {
            username: user.username,
            password: '',
            dateCreated: user.dateCreated,
            role: user.role
        }

        formattedUser.password = await hashPassword(user.password);

        return this.tigris?.createUser(formattedUser);
    }

    async changePassword(id: string, newPassword: string) {
        let hashedPassword = await hashPassword(newPassword);

        return this.tigris?.changeUserPassword(id, hashedPassword);
    }

    deleteUser(id: string) {
        return this.tigris?.deleteUser(id);
    }

    updateUser(user: CleanUser) {
        return this.tigris?.updateUser(user);
    }

    async getUserForUID(userId: string) {
        return this.tigris.getUserForUID(userId);
    }
}