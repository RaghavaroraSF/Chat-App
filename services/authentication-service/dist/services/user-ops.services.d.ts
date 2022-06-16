import { AnyObject } from '@loopback/repository';
import { UserTenant } from '@sourceloop/authentication-service/dist/models';
import { AuthClientRepository, RoleRepository, UserRepository, UserTenantRepository } from '@sourceloop/authentication-service/dist/repositories';
import { UserStatus } from '@sourceloop/core';
import { UserDto } from '../models/user.dto';
export declare class UserOpsService {
    private readonly roleRepository;
    private readonly userRepository;
    private readonly utRepository;
    private readonly authClientsRepository;
    constructor(roleRepository: RoleRepository, userRepository: UserRepository, utRepository: UserTenantRepository, authClientsRepository: AuthClientRepository);
    createUser(user: UserDto, options: AnyObject): Promise<UserDto>;
    validateUserCreation(userData: UserDto, options?: AnyObject): void;
    createUserTenantData(userData: UserDto, userStatus: UserStatus, userId?: string, options?: AnyObject): Promise<UserTenant>;
    setPassword(email: string, newPassword: string): Promise<boolean>;
}
