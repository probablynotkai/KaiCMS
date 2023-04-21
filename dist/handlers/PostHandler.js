"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostHandler {
    constructor(tigris) {
        if (!tigris)
            throw new Error("undefined instance of Tigris.");
        this.tigris = tigris;
    }
    retrieveAllPosts() {
        return this.tigris.retrieveAllPosts();
    }
    createPost(post) {
        return this.tigris.createPost(post);
    }
    updatePost(post) {
        return this.tigris.updatePost(post);
    }
    deletePost(id) {
        return this.tigris.deletePost(id);
    }
}
exports.default = PostHandler;
