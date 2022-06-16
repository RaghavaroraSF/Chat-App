import { Provider, ValueOrPromise } from "@loopback/context";
import { NotificationDataSource } from "../datasources/notification.datasource";
declare type NotificationServiceProxy = {
    getNotification(token: string): Promise<void>;
    postNotification(token: string, body: any): Promise<void>;
};
export declare class NotificationServiceProvider implements Provider<NotificationServiceProxy> {
    protected dataSource: NotificationDataSource;
    constructor(dataSource: NotificationDataSource);
    value(): ValueOrPromise<NotificationServiceProxy>;
}
export {};
