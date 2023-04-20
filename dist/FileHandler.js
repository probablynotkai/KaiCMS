"use strict";
const fs = require('fs');
class FileHandler {
    constructor() {
    }
    retrieveFileContent(filePath) {
        return new Promise((resolve) => {
            fs.open(filePath, 'a', (err, fd) => {
                if (err)
                    throw err;
                fs.readFile(filePath, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
                    if (err)
                        throw err;
                    if (!data || data === "") {
                        fs.writeFile(filePath, JSON.stringify([]), { encoding: 'utf-8', flag: 'w+' }, (err) => {
                            if (err)
                                throw err;
                            resolve(true);
                        });
                        resolve([]);
                    }
                    else {
                        resolve(JSON.parse(data));
                    }
                });
                fs.close(fd, err => {
                    if (err)
                        throw err;
                });
            });
        });
    }
    appendFileContent(filePath, newData) {
        return new Promise((resolve) => {
            fs.open(filePath, 'a+', (err, fd) => {
                if (err)
                    throw err;
                fs.appendFile(filePath, JSON.stringify(newData), (err) => {
                    if (err)
                        throw err;
                    resolve(true);
                });
                fs.close(fd, (err) => {
                    if (err)
                        throw err;
                });
            });
        });
    }
    writeFileContent(filePath, newData) {
        return new Promise((resolve) => {
            fs.open(filePath, 'a+', (err, fd) => {
                if (err)
                    throw err;
                fs.writeFile(filePath, JSON.stringify(newData), { encoding: 'utf-8', flag: 'w+' }, (err) => {
                    if (err)
                        throw err;
                    resolve(true);
                });
                fs.close(fd, (err) => {
                    if (err)
                        throw err;
                });
            });
        });
    }
}
module.exports = new FileHandler();
