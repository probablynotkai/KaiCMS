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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TigrisService_1 = __importDefault(require("./TigrisService"));
const PostHandler_1 = __importDefault(require("./handlers/PostHandler"));
const UserHandler_1 = __importDefault(require("./handlers/UserHandler"));
const LoginHandler_1 = __importDefault(require("./handlers/LoginHandler"));
const Validation_1 = require("./lib/Validation");
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const tigris = new TigrisService_1.default();
const posts = new PostHandler_1.default(tigris);
const users = new UserHandler_1.default(tigris);
const logins = new LoginHandler_1.default(tigris);
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield logins.handleSessionIdentification(req.cookies);
    if (user) {
        res.send(`<h1>Welcome back ${user.username}</h1>`);
        return;
    }
    res.send("<h1>CMS Test Page</h1>");
}));
app.get('/v1/getAllPosts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allPosts = yield posts.retrieveAllPosts();
    res.send(allPosts);
}));
app.post('/v1/getPostForId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postId = req.body['id'];
    if (!postId) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const postFound = yield posts.retrievePostForId(postId);
        if (postFound) {
            res.send({ status: 1, post: postFound });
        }
        else {
            res.send({ status: -1, userFeedback: "Post not found." });
        }
    }
}));
app.post('/v1/deletePost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let postData = {
        id: req.body['id']
    };
    if (!postData.id) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield posts.deletePost(postData.id);
        res.send(response);
    }
}));
app.post('/v1/createPost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield logins.handleSessionIdentification(req.cookies);
    if (user) {
        let postData = {
            title: req.body['title'],
            postContent: req.body['postContent'],
            thumbnail: req.body['thumbnail'],
            datePosted: new Date().toUTCString(),
            postedBy: user.username
        };
        if (!(0, Validation_1.validatePostData)(postData)) {
            res.send({
                status: -1,
                userFeedback: 'There are missing properties in the request body.'
            });
        }
        else {
            const newPost = yield posts.createPost(postData);
            res.send(newPost);
        }
        return;
    }
    res.send({
        status: -1,
        userFeedback: "You need to be logged in for this feature."
    });
}));
app.post('/v1/updatePost', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let postData = {
        id: req.body['id'],
        title: req.body['title'],
        postContent: req.body['postContent'],
        thumbnail: req.body['thumbnail']
    };
    if (!(0, Validation_1.validatePostData)(postData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const newPost = yield posts.updatePost(postData);
        res.send(newPost);
    }
}));
app.get('/v1/getAllUsers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield users.retrieveAllUsers();
    res.send(allUsers);
}));
app.post('/v1/createUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        username: req.body['username'],
        password: req.body['password'],
        dateCreated: new Date().toUTCString(),
        role: req.body['role']
    };
    if (!(0, Validation_1.validateUserData)(userData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield users.createUser(userData);
        res.send(response);
    }
}));
app.post('/v1/changePassword', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        id: req.body['id'],
        newPassword: req.body['password']
    };
    if (!userData.id || !userData.newPassword) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield users.changePassword(userData.id, userData.newPassword);
        res.send(response);
    }
}));
app.post('/v1/deleteUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.body['id'];
    if (!id) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield users.deleteUser(id);
        res.send(response);
    }
}));
app.post('/v1/updateUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        id: req.body['id'],
        username: req.body['username'],
        dateCreated: req.body['dateCreated'],
        role: req.body['role']
    };
    if (!(0, Validation_1.validateCleanUserData)(userData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield users.updateUser(userData);
        res.send(response);
    }
}));
app.post('/v1/loginUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body['username'];
    const rawPassword = req.body['password'];
    if (!username || !rawPassword) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        });
    }
    else {
        const response = yield logins.loginUser(username, rawPassword);
        if (response.status == -1) {
            res.send(response);
        }
        else {
            // @ts-ignore
            if (response.sessionId) {
                // @ts-ignore
                const sid = response.sessionId;
                const now = new Date();
                const expiryDate = new Date(now.setMonth(now.getMonth() + 2));
                // res.setHeader("Set-Cookie", `sid=${sid}; Expires=${expiryDate.toUTCString()}; Path="/"`);
                res.cookie("sid", sid, {
                    expires: expiryDate,
                    path: "/"
                });
                res.send({
                    status: 1,
                    userFeedback: "Successfully logged in."
                });
            }
        }
    }
}));
app.listen(port, () => {
    console.log(`Application is now running on port ${port}.`);
});
