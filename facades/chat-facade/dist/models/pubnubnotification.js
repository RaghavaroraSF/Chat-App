"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pubnubnotification = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Pubnubnotification = class Pubnubnotification extends repository_1.Entity {
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
], Pubnubnotification.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pubnubnotification.prototype, "subject", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Pubnubnotification.prototype, "body", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Object)
], Pubnubnotification.prototype, "receiver", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Pubnubnotification.prototype, "type", void 0);
Pubnubnotification = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Pubnubnotification);
exports.Pubnubnotification = Pubnubnotification;
//# sourceMappingURL=pubnubnotification.js.map