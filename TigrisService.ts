import {Collection, DB, Tigris} from "@tigrisdata/core";
import {Posts} from "./models/Posts";
import {CleanUser, Post, RawPost, RawUser, Session, User} from './models/Types';
import {Sessions} from "./models/Sessions";
import {Users} from "./models/Users";

const tigrisClient = new Tigris();

let postCollection: Collection<Posts>;
let sessionCollection: Collection<Sessions>;
let userCollection: Collection<Users>;

export default class TigrisService {
    db?: DB;

    constructor() {
        this.initialiseDatabase().then(() => console.log("Tigris Client has initialised!"));
    }

    async initialiseDatabase() {
        await tigrisClient.getDatabase().initializeBranch();

        await tigrisClient.registerSchemas([Posts, Sessions, Users]);

        this.db = tigrisClient.getDatabase();

        if(this.db) {
            postCollection = this.db.getCollection<Posts>(Posts);
            sessionCollection = this.db.getCollection<Sessions>(Sessions);
            userCollection = this.db.getCollection<Users>(Users);
        }
    }

    async retrieveAllPosts() {
        if(postCollection) {
            return postCollection.findMany().toArray();
        } else {
            throw new Error("Database connection error.");
        }
    }

    async retrievePostForId(postId: string) {
        if(postCollection) {
            return postCollection.findOne({ filter: { id: postId } });
        } else {
            throw new Error("Database connection error.");
        }
    }

    async createPost(post: RawPost) {
        if(postCollection) {
            let newPost = await postCollection.insertOne(post);

            return { status: 1, userFeedback: "Post has been created successfully.", post: newPost};
        } else {
            throw new Error("Database connection error.");
        }
    }

    async deletePost(id: string) {
        if(postCollection) {
            let response = await postCollection.deleteOne({ filter: { id: id } });

            return { status: 1, userFeedback: "Post has been deleted successfully.", response: response };
        } else {
            throw new Error("Database connection error.");
        }
    }

    async updatePost(updatedPost: Post) {
        if(postCollection) {
            let response = await postCollection.updateOne({
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
        } else {
            throw new Error("Database connection error.");
        }
    }

    async retrieveAllUsers() {
        if(userCollection) {
            return userCollection.findMany().toArray();
        } else {
            throw new Error("Database connection error.");
        }
    }

    async createUser(user: RawUser) {
        if(userCollection) {
            const newUser = await userCollection.insertOne(user);

            return { status: 1, userFeedback: "User has been created successfully.", id: newUser.id }
        } else {
            throw new Error("Database connection error.")
        }
    }

    async deleteUser(id: string) {
        if(userCollection) {
            const response = await userCollection.deleteOne({ filter: { id: id } });

            return { status: 1, userFeedback: "User has been deleted successfully.", response: response}
        } else {
            throw new Error("Database connection error.");
        }
    }

    async updateUser(user: CleanUser) {
        if(userCollection) {
            const response = await userCollection.updateOne({
                filter: {
                    id: user.id
                },
                fields: {
                    username: user.username,
                    role: user.role
                }
            })

            return { status: 1, userFeedback: "User has been updated successfully.", response: response }
        } else {
            throw new Error("Database connection error.");
        }
    }

    async changeUserPassword(id: string, newPassword: string) {
        if(userCollection) {
            const newUser = await userCollection.updateOne({
                filter: {
                    id: id
                },
                fields: {
                    password: newPassword
                }
            })

            return { status: 1, userFeedback: "User has been updated successfully." }
        } else {
            throw new Error("Database connection error.");
        }
    }

    async getSessionForSID(sessionId: string) {
        if(sessionCollection) {
            return sessionCollection.findOne({ filter: { sessionId: sessionId } });
        } else {
            throw new Error("Database connection error.");
        }
    }

    async getUserForUID(userId: string) {
        if(userCollection) {
            return await userCollection.findOne({ filter: { id: userId } });
        } else {
            throw new Error("Database connection error.")
        }
    }

    async createNewSession(session: Session) {
        if(sessionCollection) {
            const response = await sessionCollection.insertOne(session);

            return { status: 1, userFeedback: "Session has been created successfully.", sessionId: response.sessionId }
        } else {
            throw new Error("Database connection error.");
        }
    }

    async renewSession(session: Session) {
        if(sessionCollection) {
            const response = await sessionCollection.updateOne({
                filter: {
                    sessionId: session.sessionId
                },
                fields: {
                    expiryDate: session.expiryDate
                }
            });

            return { status: 1, userFeedback: "Session has been created successfully.", response: response }
        } else {
            throw new Error("Database connection error.");
        }
    }

    async getPasswordForUsername(username: string) {
        if(userCollection) {
            return userCollection.findOne({ filter: { username: username } });
        } else {
            throw new Error("Database connection error.");
        }
    }
}