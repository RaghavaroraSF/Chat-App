"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSignupProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const user_ops_service_1 = require("../services/user-ops.service");
let LocalSignupProvider = class LocalSignupProvider {
    constructor(userOps) {
        this.userOps = userOps;
    }
    value() {
        return async (model, token) => this.userOps.createUser(model, {});
    }
};
LocalSignupProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.service)(user_ops_service_1.UserOpsService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_ops_service_1.UserOpsService !== "undefined" && user_ops_service_1.UserOpsService) === "function" ? _a : Object])
], LocalSignupProvider);
exports.LocalSignupProvider = LocalSignupProvider;
//# sourceMappingURL=localsignupproviders.js.map