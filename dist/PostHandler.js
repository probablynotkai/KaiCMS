"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TigrisService_1 = __importDefault(require("./TigrisService"));
const tigris = new TigrisService_1.default();
class PostHandler {
    constructor() {
    }
    retrieveAllPosts() {
        return tigris.retrieveAllPosts();
    }
    updatePost(post) {
        return tigris.updatePost(post);
    }
    deletePost(id) {
        return tigris.deletePost(id);
    }
    createPost(post) {
        return tigris.createPost(post);
    }
}
module.exports = new PostHandler();
