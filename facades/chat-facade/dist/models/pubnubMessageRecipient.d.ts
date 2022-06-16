import { Entity } from '@loopback/repository';
export declare class PubnubMessageRecipient extends Entity {
    id?: string;
    channelId: string;
    recipientId: string;
    messageId: string;
    isRead?: boolean;
    constructor(data?: Partial<PubnubMessageRecipient>);
}
