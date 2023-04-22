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
const core_1 = require("@tigrisdata/core");
const Posts_1 = require("./models/Posts");
const Sessions_1 = require("./models/Sessions");
const Users_1 = require("./models/Users");
const tigrisClient = new core_1.Tigris();
let postCollection;
let sessionCollection;
let userCollection;
class TigrisService {
    constructor() {
        this.initialiseDatabase().then(() => console.log("Tigris Client has initialised!"));
    }
    initialiseDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield tigrisClient.getDatabase().initializeBranch();
            yield tigrisClient.registerSchemas([Posts_1.Posts, Sessions_1.Sessions, Users_1.Users]);
            this.db = tigrisClient.getDatabase();
            if (this.db) {
                postCollection = this.db.getCollection(Posts_1.Posts);
                sessionCollection = this.db.getCollection(Sessions_1.Sessions);
                userCollection = this.db.getCollection(Users_1.Users);
            }
        });
    }
    retrieveAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (postCollection) {
                return postCollection.findMany().toArray();
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    retrievePostForId(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (postCollection) {
                return postCollection.findOne({ filter: { id: postId } });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            if (postCollection) {
                let newPost = yield postCollection.insertOne(post);
                return { status: 1, userFeedback: "Post has been created successfully.", post: newPost };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (postCollection) {
                let response = yield postCollection.deleteOne({ filter: { id: id } });
                return { status: 1, userFeedback: "Post has been deleted successfully.", response: response };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    updatePost(updatedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            if (postCollection) {
                let response = yield postCollection.updateOne({
                    filter: {
                        id: updatedPost.id
                    },
                    fields: {
                        title: updatedPost.title,
                        postContent: updatedPost.postContent,
                        thumbnail: updatedPost.thumbnail
                    }
                });
                return { status: 1, userFeedback: "Post has been updated successfully.", response: response };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    retrieveAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                return userCollection.findMany().toArray();
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                const newUser = yield userCollection.insertOne(user);
                return { status: 1, userFeedback: "User has been created successfully.", id: newUser.id };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                const response = yield userCollection.deleteOne({ filter: { id: id } });
                return { status: 1, userFeedback: "User has been deleted successfully.", response: response };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                const response = yield userCollection.updateOne({
                    filter: {
                        id: user.id
                    },
                    fields: {
                        username: user.username,
                        role: user.role
                    }
                });
                return { status: 1, userFeedback: "User has been updated successfully.", response: response };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    changeUserPassword(id, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                const newUser = yield userCollection.updateOne({
                    filter: {
                        id: id
                    },
                    fields: {
                        password: newPassword
                    }
                });
                return { status: 1, userFeedback: "User has been updated successfully." };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    getSessionForSID(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sessionCollection) {
                return sessionCollection.findOne({ filter: { sessionId: sessionId } });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    getUserForUID(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                return yield userCollection.findOne({ filter: { id: userId } });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    createNewSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sessionCollection) {
                const response = yield sessionCollection.insertOne(session);
                return { status: 1, userFeedback: "Session has been created successfully.", sessionId: response.sessionId };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    renewSession(session) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sessionCollection) {
                const response = yield sessionCollection.updateOne({
                    filter: {
                        sessionId: session.sessionId
                    },
                    fields: {
                        expiryDate: session.expiryDate
                    }
                });
                return { status: 1, userFeedback: "Session has been created successfully.", response: response };
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    getPasswordForUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userCollection) {
                return userCollection.findOne({ filter: { username: username } });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
}
exports.default = TigrisService;
