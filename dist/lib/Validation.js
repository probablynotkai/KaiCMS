"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCleanUserData = exports.validateUserData = exports.validatePostData = void 0;
function validatePostData(postData) {
    let missingProperty = false;
    let requiredProperties = ["title", "postContent", "thumbnail", "datePosted", "postedBy"];
    for (let property of requiredProperties) {
        if (!postData[property]) {
            missingProperty = true;
        }
    }
    return !missingProperty;
}
exports.validatePostData = validatePostData;
function validateUserData(userData) {
    let missingProperty = false;
    let requiredProperties = ["username", "password", "dateCreated"];
    for (let property of requiredProperties) {
        if (!userData[property]) {
            missingProperty = true;
        }
    }
    return !missingProperty;
}
exports.validateUserData = validateUserData;
function validateCleanUserData(userData) {
    let missingProperty = false;
    let requiredProperties = ["username", "id", "dateCreated"];
    for (let property of requiredProperties) {
        if (!userData[property]) {
            missingProperty = true;
        }
    }
    return !missingProperty;
}
exports.validateCleanUserData = validateCleanUserData;
