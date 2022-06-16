"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = tslib_1.__importStar(require("./message.datasource.config.json"));
let MessageDataSource = class MessageDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        dsConfig = Object.assign({}, dsConfig, {
            options: { baseUrl: process.env.CHAT_SERVICE_URL },
        });
        super(dsConfig);
    }
};
MessageDataSource.dataSourceName = 'message';
MessageDataSource.defaultConfig = config;
MessageDataSource = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.message', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MessageDataSource);
exports.MessageDataSource = MessageDataSource;
//# sourceMappingURL=message.datasource.js.map