"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubnubMessage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PubnubMessage = class PubnubMessage extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "body", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "toUserId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "channelId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "channelType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessage.prototype, "createdBy", void 0);
PubnubMessage = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PubnubMessage);
exports.PubnubMessage = PubnubMessage;
//# sourceMappingURL=PubnubMessage.js.map