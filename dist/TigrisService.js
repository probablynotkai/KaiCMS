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
const tigrisClient = new core_1.Tigris();
class TigrisService {
    constructor() {
        this.initialiseDatabase().then(() => console.log("Tigris Client has initialised!"));
    }
    initialiseDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield tigrisClient.getDatabase().initializeBranch();
            yield tigrisClient.registerSchemas([Posts_1.Posts]);
            this.db = tigrisClient.getDatabase();
            if (this.db) {
                this.collection = this.db.getCollection(Posts_1.Posts);
            }
        });
    }
    retrieveAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                let collection = this.db.getCollection(Posts_1.Posts);
                return collection.findMany().toArray().then((posts) => {
                    return posts;
                });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                let collection = this.db.getCollection(Posts_1.Posts);
                return collection.insertOne(post).then((newPost) => {
                    return { status: 1, userFeedback: "Post has been created successfully.", post: newPost };
                });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                let collection = this.db.getCollection(Posts_1.Posts);
                return collection.deleteOne({ filter: { id: id } }).then((res) => {
                    return { status: 1, userFeedback: "Post has been deleted successfully.", response: res };
                });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
    updatePost(updatedPost) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                let collection = this.db.getCollection(Posts_1.Posts);
                return collection.updateOne({
                    filter: {
                        id: parseInt(updatedPost.id)
                    },
                    fields: {
                        title: updatedPost.title,
                        postContent: updatedPost.postContent,
                        thumbnail: updatedPost.thumbnail
                    }
                }).then((response) => {
                    return { status: 1, userFeedback: "Post has been updated successfully.", response: response };
                });
            }
            else {
                throw new Error("Database connection error.");
            }
        });
    }
}
exports.default = TigrisService;
