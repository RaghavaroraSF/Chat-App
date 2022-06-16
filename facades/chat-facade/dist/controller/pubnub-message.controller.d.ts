import { Filter, Where } from '@loopback/repository';
import { PubnubMessageRecipient } from '../models/pubnubMessageRecipient';
import { PubnubMessage } from '../models/PubnubMessage';
import { Messageservice } from '../services/message.service';
import { Notificationservice } from '../services/notif.service';
import { IAuthUserWithPermissions } from '@sourceloop/core';
export declare class PubnubMessageController {
    private readonly messageService;
    private readonly notifService;
    constructor(messageService: Messageservice, notifService: Notificationservice);
    find(user: IAuthUserWithPermissions, token: string, channelID?: string, filter?: Filter<PubnubMessage>): Promise<PubnubMessage[]>;
    create(token: string, message: PubnubMessage): Promise<PubnubMessage>;
    patchMessageRecipients(token: string, msgId: string, messageRecipient: Partial<PubnubMessageRecipient>, where?: Where<PubnubMessageRecipient>): Promise<PubnubMessageRecipient>;
    me(user: IAuthUserWithPermissions, token: string): Promise<string>;
}