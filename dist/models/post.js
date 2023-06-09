"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const Field = require('@tigrisdata/core').Field;
const PrimaryKey = require('@tigrisdata/core').PrimaryKey;
const TigrisCollection = require('@tigrisdata/core').TigrisCollection;
const TigrisDataTypes = require('@tigrisdata/core').TigrisDataTypes;
let Post = class Post {
};
__decorate([
    PrimaryKey(TigrisDataTypes.INT64, { order: 1, autoGenerate: true }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Post.prototype, "postContent", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Post.prototype, "thumbnail", void 0);
Post = __decorate([
    TigrisCollection("post")
], Post);
exports.Post = Post;
