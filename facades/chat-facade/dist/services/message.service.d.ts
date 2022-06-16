import { Provider } from '@loopback/core';
import { Filter, Where } from '@loopback/repository';
import { MessageDataSource } from '../datasources/message.datasource';
import { PubnubMessage } from '../models/PubnubMessage';
import { PubnubMessageRecipient } from '../models/pubnubMessageRecipient';
export interface Messageservice {
    getMessage(token: string, filter?: Filter<PubnubMessage>): Promise<PubnubMessage[]>;
    createMessage(data: PubnubMessage, token: string): Promise<PubnubMessage>;
    getMessageRecipients(token: string, filter?: Filter<PubnubMessageRecipient>): Promise<PubnubMessageRecipient>[];
    createMessageRecipients(data: PubnubMessageRecipient, token: string): Promise<PubnubMessageRecipient>;
    updateMsgRecipients(id: string, data: Partial<PubnubMessageRecipient>, token: string, where?: Where<PubnubMessageRecipient>): Promise<PubnubMessageRecipient>;
    deleteMsgRecipients(id: string, data: Partial<PubnubMessageRecipient>, token: string, where?: Where<PubnubMessageRecipient>): Promise<PubnubMessageRecipient>;
}
export declare class MessageserviceProvider implements Provider<Messageservice> {
    protected dataSource: MessageDataSource;
    constructor(dataSource?: MessageDataSource);
    value(): Promise<Messageservice>;
}
