import TigrisService from "./TigrisService";
import PostHandler from "./handlers/PostHandler";
import UserHandler from "./handlers/UserHandler";
import LoginHandler from "./handlers/LoginHandler";

import {validateCleanUserData, validatePostData, validateUserData} from "./lib/Validation";

const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const tigris = new TigrisService();
const posts = new PostHandler(tigris);
const users = new UserHandler(tigris);
const logins = new LoginHandler(tigris);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('', async (req: any, res: any) => {
    const user = await logins.handleSessionIdentification(req.cookies);

    if(user) {
        res.send(`<h1>Welcome back ${user.username}</h1>`)
        return;
    }

    res.send("<h1>CMS Test Page</h1>")
})

app.get('/v1/getAllPosts', async(req: any, res: any) => {
    const allPosts = await posts.retrieveAllPosts();

    res.send(allPosts);
})

app.post('/v1/getPostForId', async(req: any, res: any) => {
    const postId = req.body['id'];

    if(!postId) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const postFound = await posts.retrievePostForId(postId);

        if(postFound) {
            res.send({ status: 1, post: postFound });
        } else {
            res.send({ status: -1, userFeedback: "Post not found." });
        }
    }
})

app.post('/v1/deletePost', async (req: any, res: any) => {
    let postData = {
        id: req.body['id']
    }

    if(!postData.id) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await posts.deletePost(postData.id);

        res.send(response);
    }
})

app.post('/v1/createPost', async (req: any, res: any) => {
    const user = await logins.handleSessionIdentification(req.cookies);
    
    if(user) {
        let postData = {
            title: req.body['title'],
            postContent: req.body['postContent'],
            thumbnail: req.body['thumbnail'],
            datePosted: new Date().toUTCString(),
            postedBy: user.username
        };

        if(!validatePostData(postData)) {
            res.send({
                status: -1,
                userFeedback: 'There are missing properties in the request body.'
            })
        } else {
            const newPost = await posts.createPost(postData);

            res.send(newPost);
        }
        return;
    }
    
    res.send({
        status: -1,
        userFeedback: "You need to be logged in for this feature."
    })
})

app.post('/v1/updatePost', async (req: any, res: any) => {
    let postData = {
        id: req.body['id'],
        title: req.body['title'],
        postContent: req.body['postContent'],
        thumbnail: req.body['thumbnail']
    };

    if(!validatePostData(postData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const newPost = await posts.updatePost(postData);

        res.send(newPost);
    }
})

app.get('/v1/getAllUsers', async (req: any, res: any) => {
    const allUsers = await users.retrieveAllUsers();

    res.send(allUsers);
})

app.post('/v1/createUser', async (req: any, res: any) => {
    const userData = {
        username: req.body['username'],
        password: req.body['password'],
        dateCreated: new Date().toUTCString(),
        role: req.body['role']
    }

    if(!validateUserData(userData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await users.createUser(userData);

        res.send(response);
    }
})

app.post('/v1/changePassword', async (req: any, res: any) => {
    const userData = {
        id: req.body['id'],
        newPassword: req.body['password']
    }

    if(!userData.id || !userData.newPassword) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await users.changePassword(userData.id, userData.newPassword);

        res.send(response);
    }
})

app.post('/v1/deleteUser', async (req: any, res: any) => {
    const id = req.body['id'];

    if(!id) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await users.deleteUser(id);

        res.send(response);
    }
})

app.post('/v1/updateUser', async (req: any, res: any) => {
    const userData = {
        id: req.body['id'],
        username: req.body['username'],
        dateCreated: req.body['dateCreated'],
        role: req.body['role']
    }

    if(!validateCleanUserData(userData)) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await users.updateUser(userData);

        res.send(response);
    }
})

app.post('/v1/loginUser', async (req: any, res: any) => {
    const username = req.body['username'];
    const rawPassword = req.body['password'];

    if(!username || !rawPassword) {
        res.send({
            status: -1,
            userFeedback: 'There are missing properties in the request body.'
        })
    } else {
        const response = await logins.loginUser(username, rawPassword);

        if(response.status == -1) {
            res.send(response);
        } else {
            // @ts-ignore
            if(response.sessionId) {
                // @ts-ignore
                const sid = response.sessionId;

                const now = new Date();
                const expiryDate = new Date(now.setMonth(now.getMonth() + 2));

                // res.setHeader("Set-Cookie", `sid=${sid}; Expires=${expiryDate.toUTCString()}; Path="/"`);
                res.cookie("sid", sid, {
                    expires: expiryDate,
                    path: "/"
                })

                res.send({
                    status: 1,
                    userFeedback: "Successfully logged in."
                })
            }
        }
    }
})

app.listen(port, () => {
    console.log(`Application is now running on port ${port}.`);
})