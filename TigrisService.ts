import {Collection, Cursor, DB, Tigris} from "@tigrisdata/core";
import {Posts} from "./models/Posts";
import { RawPost, Post } from './models/Types';

const tigrisClient = new Tigris();

export default class TigrisService {
    db?: DB;
    collection?: Collection<Posts>;
    cursor?: Cursor<any>;

    constructor() {
        this.initialiseDatabase().then(() => console.log("Tigris Client has initialised!"));
    }

    async initialiseDatabase() {
        await tigrisClient.getDatabase().initializeBranch();
        await tigrisClient.registerSchemas([Posts]);

        this.db = tigrisClient.getDatabase();

        if(this.db) {
            this.collection = this.db.getCollection<Posts>(Posts);
        }
    }

    async retrieveAllPosts() {
        if(this.db) {
            let collection = this.db.getCollection<Posts>(Posts);

            return collection.findMany().toArray().then((posts) => {
                return posts
            });
        } else {
            throw new Error("Database connection error.");
        }
    }

    async createPost(post: RawPost) {
        if(this.db) {
            let collection = this.db.getCollection<Posts>(Posts);

            return collection.insertOne(post).then((newPost) => {
                return { status: 1, userFeedback: "Post has been created successfully.", post: newPost};
            });
        } else {
            throw new Error("Database connection error.");
        }
    }

    async deletePost(id: string) {
        if(this.db) {
            let collection = this.db.getCollection<Posts>(Posts);

            return collection.deleteOne({ filter: { id: id } }).then((res) => {
                return { status: 1, userFeedback: "Post has been deleted successfully.", response: res };
            })
        } else {
            throw new Error("Database connection error.");
        }
    }

    async updatePost(updatedPost: Post) {
        if(this.db) {
            let collection = this.db.getCollection<Posts>(Posts);

            return collection.updateOne({
                filter: {
                    id: updatedPost.id
                },
                fields: {
                    title: updatedPost.title,
                    postContent: updatedPost.postContent,
                    thumbnail: updatedPost.thumbnail
                }
            }).then((response) => {
                return { status: 1, userFeedback: "Post has been updated successfully.", response: response }
            })
        } else {
            throw new Error("Database connection error.");
        }
    }
}