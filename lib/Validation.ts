export function validatePostData(postData: any) {
    let missingProperty = false;
    let requiredProperties = ["title", "postContent", "thumbnail", "datePosted", "postedBy"];

    for(let property of requiredProperties) {
        if(!postData[property]) {
            missingProperty = true;
        }
    }

    return !missingProperty;
}

export function validateUserData(userData: any) {
    let missingProperty = false;
    let requiredProperties = ["username", "password", "dateCreated", "role"];

    for(let property of requiredProperties) {
        if(!userData[property]) {
            missingProperty = true;
        }
    }

    return !missingProperty;
}

export function validateCleanUserData(userData: any) {
    let missingProperty = false;
    let requiredProperties = ["username", "id", "dateCreated", "role"];

    for(let property of requiredProperties) {
        if(!userData[property]) {
            missingProperty = true;
        }
    }

    return !missingProperty;
}