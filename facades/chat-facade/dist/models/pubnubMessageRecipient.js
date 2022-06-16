"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubnubMessageRecipient = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let PubnubMessageRecipient = class PubnubMessageRecipient extends repository_1.Entity {
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
], PubnubMessageRecipient.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessageRecipient.prototype, "channelId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessageRecipient.prototype, "recipientId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], PubnubMessageRecipient.prototype, "messageId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
    }),
    tslib_1.__metadata("design:type", Boolean)
], PubnubMessageRecipient.prototype, "isRead", void 0);
PubnubMessageRecipient = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], PubnubMessageRecipient);
exports.PubnubMessageRecipient = PubnubMessageRecipient;
//# sourceMappingURL=pubnubMessageRecipient.js.map