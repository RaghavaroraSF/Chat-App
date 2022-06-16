import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class NotificationDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        baseURL: string;
        crud: boolean;
        options: {
            baseUrl: string;
            headers: {
                accept: string;
                "content-type": string;
            };
        };
        operations: {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                body: string;
            };
            functions: {
                postNotification: string[];
            };
        }[];
    };
    constructor(dsConfig?: object);
}
