import TigrisService from "../TigrisService";
import {Post, RawPost} from "../models/Types";

export default class PostHandler {
    tigris;
    constructor(tigris: TigrisService) {
        if(!tigris) throw new Error("undefined instance of Tigris.")

        this.tigris = tigris;
    }

    retrieveAllPosts() {
        return this.tigris.retrieveAllPosts();
    }

    retrievePostForId(postId: string) {
        return this.tigris?.retrievePostForId(postId);
    }

    createPost(post: RawPost) {
        return this.tigris.createPost(post);
    }

    updatePost(post: Post) {
        return this.tigris.updatePost(post);
    }

    deletePost(id: string) {
        return this.tigris.deletePost(id);
    }
}