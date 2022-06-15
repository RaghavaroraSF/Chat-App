import { inject, Provider, ValueOrPromise } from "@loopback/context";
import { getService } from "@loopback/service-proxy";
import { NotificationDataSource } from "../datasources/notification.datasource";
type NotificationServiceProxy={
    getNotification(token: string): Promise<void>;
    postNotification(token:string,body:any):Promise<void>;
}
export class NotificationServiceProvider implements Provider<NotificationServiceProxy>{
    constructor(
@inject('datasources.notification')
protected dataSource:NotificationDataSource
    ){}
    value(): ValueOrPromise<NotificationServiceProxy> {
        return getService(this.dataSource);
    }
}