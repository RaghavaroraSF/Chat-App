import { Entity } from '@loopback/repository';
export declare class PubnubMessage extends Entity {
    id?: string;
    subject?: string;
    body: string;
    toUserId?: string;
    channelId: string;
    channelType: string;
    createdBy?: string;
    constructor(data?: Partial<PubnubMessage>);
}
