"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageserviceProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const service_proxy_1 = require("@loopback/service-proxy");
const message_datasource_1 = require("../datasources/message.datasource");
let MessageserviceProvider = class MessageserviceProvider {
    constructor(
    // message must match the name property in the datasource json file
    dataSource = new message_datasource_1.MessageDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
};
MessageserviceProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.message')),
    tslib_1.__metadata("design:paramtypes", [message_datasource_1.MessageDataSource])
], MessageserviceProvider);
exports.MessageserviceProvider = MessageserviceProvider;
//# sourceMappingURL=message.service.js.map