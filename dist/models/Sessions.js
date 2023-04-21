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
exports.Sessions = void 0;
const core_1 = require("@tigrisdata/core");
let Sessions = class Sessions {
};
__decorate([
    (0, core_1.Field)(core_1.TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Sessions.prototype, "sessionId", void 0);
__decorate([
    (0, core_1.Field)(core_1.TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Sessions.prototype, "userId", void 0);
__decorate([
    (0, core_1.Field)(core_1.TigrisDataTypes.STRING),
    __metadata("design:type", String)
], Sessions.prototype, "expiryDate", void 0);
Sessions = __decorate([
    (0, core_1.TigrisCollection)("sessions")
], Sessions);
exports.Sessions = Sessions;
