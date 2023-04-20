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
exports.Posts = void 0;
const Field = require('@tigrisdata/core').Field;
const PrimaryKey = require('@tigrisdata/core').PrimaryKey;
const TigrisCollection = require('@tigrisdata/core').TigrisCollection;
const TigrisDataTypes = require('@tigrisdata/core').TigrisDataTypes;
let Posts = class Posts {
};
__decorate([
    PrimaryKey(TigrisDataTypes.INT64, { order: 1, autoGenerate: true }),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Posts.prototype, "postContent", void 0);
__decorate([
    Field(TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Posts.prototype, "thumbnail", void 0);
Posts = __decorate([
    TigrisCollection("posts")
], Posts);
exports.Posts = Posts;
