import { Provider, ValueOrPromise } from '@loopback/core';
import { SignupTokenHandlerFn } from '@sourceloop/authentication-service';
export declare class TokenHandlerProvider implements Provider<SignupTokenHandlerFn> {
    value(): ValueOrPromise<SignupTokenHandlerFn>;
}
