import { Provider } from '@loopback/core';
import { UserSignupFn } from '@sourceloop/authentication-service';
import { UserDto } from '../models/user.dto';
import { UserOpsService } from '../services/user-ops.service';
export declare class LocalSignupProvider implements Provider<UserSignupFn<UserDto, UserDto>> {
    private readonly userOps;
    constructor(userOps: UserOpsService);
    value(): UserSignupFn<UserDto, UserDto>;
}
