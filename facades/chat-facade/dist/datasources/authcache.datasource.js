"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthcacheDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const core_2 = require("@sourceloop/core");
const config = {
    name: core_2.AuthCacheSourceName,
    connector: 'kv-redis',
    url: '',
    host: process.env.AUTH_DB_HOST,
    port: process.env.AUTH_DB_PORT,
    password: process.env.AUTH_DB_PASSWORD,
    db: process.env.AUTH_DB_DATABASE,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let AuthcacheDataSource = class AuthcacheDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
AuthcacheDataSource.dataSourceName = core_2.AuthCacheSourceName;
AuthcacheDataSource.defaultConfig = config;
AuthcacheDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.authcache', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthcacheDataSource);
exports.AuthcacheDataSource = AuthcacheDataSource;
//# sourceMappingURL=authcache.datasource.js.map