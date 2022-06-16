import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class AuthcacheDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        url: string;
        host: string | undefined;
        port: string | undefined;
        password: string | undefined;
        db: string | undefined;
    };
    constructor(dsConfig?: object);
}
