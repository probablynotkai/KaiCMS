"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TigrisService_1 = __importDefault(require("./TigrisService"));
const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const tigris = new TigrisService_1.default();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/v1/getAllPosts', (req, res) => {
    tigris.retrieveAllPosts().then((posts) => {
        res.send(posts);
    });
});
app.post('/v1/deletePost', (req, res) => {
    let postData = {
        id: req.body['id']
    };
    if (!postData.id) {
        res.send({
            status: -1,
            message: 'There are missing properties in the request body.'
        });
    }
    else {
        tigris.deletePost(postData.id).then((response) => {
            res.send(response);
        });
    }
});
app.post('/v1/createPost', (req, res) => {
    let postData = {
        title: req.body['title'],
        postContent: req.body['postContent'],
        thumbnail: req.body['thumbnail']
    };
    if (!validatePostData(postData)) {
        res.send({
            status: -1,
            message: 'There are missing properties in the request body.'
        });
    }
    else {
        tigris.createPost(postData).then((newPost) => {
            res.send(newPost);
        });
    }
});
app.post('/v1/updatePost', (req, res) => {
    let postData = {
        id: req.body['id'],
        title: req.body['title'],
        postContent: req.body['postContent'],
        thumbnail: req.body['thumbnail']
    };
    if (!validatePostData(postData)) {
        res.send({
            status: -1,
            message: 'There are missing properties in the request body.'
        });
    }
    else {
        tigris.updatePost(postData).then((newPost) => {
            res.send(newPost);
        });
    }
});
app.listen(port, () => {
    console.log(`Application is now running on port ${port}.`);
});
function validatePostData(postData) {
    let missingProperty = false;
    let requiredProperties = ["title", "postContent", "thumbnail"];
    for (let property of requiredProperties) {
        if (!postData[property]) {
            missingProperty = true;
        }
    }
    return !missingProperty;
}
