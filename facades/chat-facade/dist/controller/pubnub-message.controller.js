"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubnubMessageController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const loopback4_authentication_1 = require("loopback4-authentication");
const loopback4_authorization_1 = require("loopback4-authorization");
const pubnubMessageRecipient_1 = require("../models/pubnubMessageRecipient");
const pubnubnotification_1 = require("../models/pubnubnotification");
const PubnubMessage_1 = require("../models/PubnubMessage");
const core_2 = require("@sourceloop/core");
const permission_key_enum_1 = require("../permission-key.enum");
let PubnubMessageController = class PubnubMessageController {
    constructor(messageService, notifService) {
        this.messageService = messageService;
        this.notifService = notifService;
    }
    async find(user, token, channelID, filter) {
        const filter1 = {
            where: {
                channelId: channelID,
            },
            order: ['createdOn ASC'],
        };
        return this.messageService.getMessage(token, filter1);
    }
    async create(token, message) {
        var _a, _b;
        message.channelId = (_a = message.channelId) !== null && _a !== void 0 ? _a : message.toUserId;
        const msg = await this.messageService.createMessage(message, token);
        const msgrecipient = new pubnubMessageRecipient_1.PubnubMessageRecipient({
            channelId: message.channelId,
            recipientId: (_b = message.toUserId) !== null && _b !== void 0 ? _b : message.channelId,
            messageId: msg.id,
        });
        await this.messageService.createMessageRecipients(msgrecipient, token);
        const notif = new pubnubnotification_1.Pubnubnotification({
            subject: message.subject,
            body: message.body,
            type: 0,
            receiver: {
                to: [
                    {
                        type: 0,
                        id: message.channelId,
                    }
                ],
            },
        });
        console.log(notif);
        await this.notifService.createNotification(notif, token);
        return msg;
    }
    async patchMessageRecipients(token, msgId, messageRecipient, where) {
        const patched = {
            isRead: true,
        };
        return this.messageService.updateMsgRecipients(msgId, patched, token);
    }
    async me(user, token) {
        if (user.userTenantId) {
            return user.userTenantId;
        }
        else {
            return '';
        }
    }
};
tslib_1.__decorate([
    (0, loopback4_authentication_1.authenticate)("bearer" /* STRATEGY.BEARER */),
    (0, loopback4_authorization_1.authorize)({ permissions: [permission_key_enum_1.PermissionKey.ViewMessage] }),
    (0, rest_1.get)('/messages', {
        security: core_2.OPERATION_SECURITY_SPEC,
        responses: {
            [200 /* STATUS_CODE.OK */]: {
                description: 'Array of Message model instances',
                content: {
                    [core_2.CONTENT_TYPE.JSON]: {
                        schema: {
                            type: 'array',
                            items: (0, rest_1.getModelSchemaRef)(PubnubMessage_1.PubnubMessage, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, core_1.inject)(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER)),
    tslib_1.__param(1, rest_1.param.header.string('Authorization')),
    tslib_1.__param(2, rest_1.param.query.string('ChannelID')),
    tslib_1.__param(3, rest_1.param.filter(PubnubMessage_1.PubnubMessage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PubnubMessageController.prototype, "find", null);
tslib_1.__decorate([
    (0, loopback4_authentication_1.authenticate)("bearer" /* STRATEGY.BEARER */),
    (0, loopback4_authorization_1.authorize)({ permissions: [permission_key_enum_1.PermissionKey.CreateMessage] }),
    (0, rest_1.post)('/messages', {
        security: core_2.OPERATION_SECURITY_SPEC,
        responses: {
            [200 /* STATUS_CODE.OK */]: {
                description: 'Message model instance',
                content: {
                    [core_2.CONTENT_TYPE.JSON]: { schema: (0, rest_1.getModelSchemaRef)(PubnubMessage_1.PubnubMessage) },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.header.string('Authorization')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            [core_2.CONTENT_TYPE.JSON]: {
                schema: (0, rest_1.getModelSchemaRef)(PubnubMessage_1.PubnubMessage, {
                    title: 'Message'
                    // exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, PubnubMessage_1.PubnubMessage]),
    tslib_1.__metadata("design:returntype", Promise)
], PubnubMessageController.prototype, "create", null);
tslib_1.__decorate([
    (0, loopback4_authentication_1.authenticate)("bearer" /* STRATEGY.BEARER */),
    (0, loopback4_authorization_1.authorize)({ permissions: [permission_key_enum_1.PermissionKey.UpdateMessageRecipient] }),
    (0, rest_1.patch)(`messages/{messageid}/markAsRead`, {
        security: core_2.OPERATION_SECURITY_SPEC,
        responses: {
            [200 /* STATUS_CODE.OK */]: {
                description: 'Message PATCH success count',
                content: { [core_2.CONTENT_TYPE.JSON]: { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.header.string('Authorization')),
    tslib_1.__param(1, rest_1.param.path.string('messageid')),
    tslib_1.__param(2, (0, rest_1.requestBody)({
        content: {
            [core_2.CONTENT_TYPE.JSON]: {
                schema: (0, rest_1.getModelSchemaRef)(pubnubMessageRecipient_1.PubnubMessageRecipient, { partial: true }),
            },
        },
    })),
    tslib_1.__param(3, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(pubnubMessageRecipient_1.PubnubMessageRecipient))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PubnubMessageController.prototype, "patchMessageRecipients", null);
tslib_1.__decorate([
    (0, loopback4_authentication_1.authenticate)("bearer" /* STRATEGY.BEARER */),
    (0, loopback4_authorization_1.authorize)({ permissions: ['*'] }),
    (0, rest_1.get)('/userTenantId', {
        security: core_2.OPERATION_SECURITY_SPEC,
        responses: {
            [200 /* STATUS_CODE.OK */]: {
                description: 'To get the userTenantId',
                content: {
                    [core_2.CONTENT_TYPE.TEXT]: {
                        type: 'string',
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, core_1.inject)(loopback4_authentication_1.AuthenticationBindings.CURRENT_USER)),
    tslib_1.__param(1, rest_1.param.header.string('Authorization')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", Promise)
], PubnubMessageController.prototype, "me", null);
PubnubMessageController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('services.Messageservice')),
    tslib_1.__param(1, (0, core_1.inject)('services.Notificationservice')),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], PubnubMessageController);
exports.PubnubMessageController = PubnubMessageController;
//# sourceMappingURL=pubnub-message.controller.js.map