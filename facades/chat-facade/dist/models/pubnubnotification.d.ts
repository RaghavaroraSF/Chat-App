import { Entity } from '@loopback/repository';
export declare class Pubnubnotification extends Entity {
    id?: string;
    subject: string;
    body: string;
    receiver: object;
    type: number;
    constructor(data?: Partial<Pubnubnotification>);
}
