"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationServiceProvider = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const service_proxy_1 = require("@loopback/service-proxy");
const notification_datasource_1 = require("../datasources/notification.datasource");
let NotificationServiceProvider = class NotificationServiceProvider {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
};
NotificationServiceProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, context_1.inject)('datasources.notification')),
    tslib_1.__metadata("design:paramtypes", [notification_datasource_1.NotificationDataSource])
], NotificationServiceProvider);
exports.NotificationServiceProvider = NotificationServiceProvider;
//# sourceMappingURL=notif.service.js.map