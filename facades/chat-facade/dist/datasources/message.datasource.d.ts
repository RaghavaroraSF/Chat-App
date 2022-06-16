import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class MessageDataSource extends juggler.DataSource implements LifeCycleObserver {
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
        operations: ({
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                query: {
                    filter: string;
                    where?: undefined;
                };
                body?: undefined;
            };
            functions: {
                getMessage: string[];
                createMessage?: undefined;
                getMessageRecipients?: undefined;
                createMessageRecipients?: undefined;
                updateMsgRecipients?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                body: string;
                query?: undefined;
            };
            functions: {
                createMessage: string[];
                getMessage?: undefined;
                getMessageRecipients?: undefined;
                createMessageRecipients?: undefined;
                updateMsgRecipients?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                query: {
                    filter: string;
                    where?: undefined;
                };
                body?: undefined;
            };
            functions: {
                getMessageRecipients: string[];
                getMessage?: undefined;
                createMessage?: undefined;
                createMessageRecipients?: undefined;
                updateMsgRecipients?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                body: string;
                query?: undefined;
            };
            functions: {
                createMessageRecipients: string[];
                getMessage?: undefined;
                createMessage?: undefined;
                getMessageRecipients?: undefined;
                updateMsgRecipients?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                query: {
                    where: string;
                    filter?: undefined;
                };
                body: string;
            };
            functions: {
                updateMsgRecipients: string[];
                getMessage?: undefined;
                createMessage?: undefined;
                getMessageRecipients?: undefined;
                createMessageRecipients?: undefined;
            };
        } | {
            template: {
                method: string;
                url: string;
                headers: {
                    Authorization: string;
                };
                query: {
                    where: string;
                    filter?: undefined;
                };
                body?: undefined;
            };
            functions: {
                updateMsgRecipients: string[];
                getMessage?: undefined;
                createMessage?: undefined;
                getMessageRecipients?: undefined;
                createMessageRecipients?: undefined;
            };
        })[];
    };
    constructor(dsConfig?: object);
}
