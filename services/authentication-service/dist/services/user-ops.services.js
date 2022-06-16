"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOpsService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("@sourceloop/authentication-service/dist/models");
const repositories_1 = require("@sourceloop/authentication-service/dist/repositories");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const user_dto_1 = require("../models/user.dto");
const saltRounds = 10;
let UserOpsService = class UserOpsService {
    constructor(roleRepository, userRepository, utRepository, authClientsRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.utRepository = utRepository;
        this.authClientsRepository = authClientsRepository;
    }
    async createUser(user, options) {
        this.validateUserCreation(user, options);
        const authClient = await this.authClientsRepository.findOne({
            where: {
                clientId: user.clientId,
            },
        });
        if (!authClient) {
            throw new rest_1.HttpErrors.BadRequest('Invalid Client');
        }
        const userExists = await this.userRepository.findOne({
            where: {
                or: [{ username: user.username }, { email: user.email }],
            },
            fields: {
                id: true,
            },
        });
        if (userExists) {
            const userTenantExists = await this.utRepository.findOne({
                where: {
                    userId: userExists.id,
                    tenantId: user.tenantId,
                },
            });
            if (userTenantExists) {
                throw new rest_1.HttpErrors.BadRequest('User already exists');
            }
            else {
                const userTenant = await this.createUserTenantData(user, 1 /* UserStatus.ACTIVE */, userExists === null || userExists === void 0 ? void 0 : userExists.id, options);
                return new user_dto_1.UserDto({
                    roleId: userTenant.roleId,
                    status: userTenant.status,
                    tenantId: userTenant.tenantId,
                    userTenantId: userTenant.id,
                });
            }
        }
        const username = user.username;
        user.username = username.toLowerCase();
        //Override default tenant id
        const userSaved = await this.userRepository.createWithoutPassword(new models_1.User({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            defaultTenantId: user.tenantId,
            authClientIds: `{${authClient === null || authClient === void 0 ? void 0 : authClient.id}}`,
        }), options);
        const userTenantData = await this.createUserTenantData(user, 1 /* UserStatus.ACTIVE */, userSaved === null || userSaved === void 0 ? void 0 : userSaved.id, options);
        await this.setPassword(user.email, user.password);
        return new user_dto_1.UserDto({
            roleId: userTenantData.roleId,
            status: userTenantData.status,
            tenantId: userTenantData.tenantId,
            userTenantId: userTenantData.id,
        });
    }
    validateUserCreation(userData, options) {
        var _a;
        // Check for valid email
        const emailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        if (userData.email && !emailRegex.test(userData.email)) {
            throw new rest_1.HttpErrors.BadRequest('Email invalid.');
        }
        // Check for allowed domains
        const allowedDomains = ((_a = process.env.AUTO_SIGNUP_DOMAINS) !== null && _a !== void 0 ? _a : '').split(',');
        const emailDomain = userData.email.split('@')[1];
        if (!(emailDomain && allowedDomains.length > 0)) {
            throw new rest_1.HttpErrors.BadRequest('Domain not supported, please enter a valid email');
        }
        if (!allowedDomains.includes(emailDomain) && options) {
            options.authProvider = 'internal';
            return;
        }
        const e164RegEx = /^\+?[1-9]\d{1,14}$/;
        if (userData.phone && !e164RegEx.test(userData.phone)) {
            throw new rest_1.HttpErrors.BadRequest('Phone number invalid.');
        }
    }
    async createUserTenantData(userData, userStatus, userId, options) {
        return this.utRepository.create({
            roleId: userData.roleId,
            status: userStatus,
            tenantId: userData.tenantId,
            userId,
        }, options);
    }
    async setPassword(email, newPassword) {
        const user = await this.userRepository.findOne({ where: { email } });
        let creds;
        try {
            creds = user && (await this.userRepository.credentials(user.id).get());
        }
        catch (e) {
            //do nothing
        }
        if (!user || user.deleted) {
            throw new rest_1.HttpErrors.Unauthorized("UserDoesNotExist" /* AuthenticateErrorKeys.UserDoesNotExist */);
        }
        else if (creds) {
            throw new rest_1.HttpErrors.Unauthorized('User already signed up.');
        }
        else {
            // Do nothing
        }
        const password = await bcrypt_1.default.hash(newPassword, saltRounds);
        creds = new models_1.UserCredentials({
            authProvider: 'internal',
            password,
        });
        await this.userRepository.credentials(user.id).create(creds);
        return true;
    }
};
UserOpsService = tslib_1.__decorate([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RoleRepository)),
    tslib_1.__param(1, (0, repository_1.repository)(repositories_1.UserRepository)),
    tslib_1.__param(2, (0, repository_1.repository)(repositories_1.UserTenantRepository)),
    tslib_1.__param(3, (0, repository_1.repository)(repositories_1.AuthClientRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleRepository,
        repositories_1.UserRepository,
        repositories_1.UserTenantRepository,
        repositories_1.AuthClientRepository])
], UserOpsService);
exports.UserOpsService = UserOpsService;
//# sourceMappingURL=user-ops.services.js.map