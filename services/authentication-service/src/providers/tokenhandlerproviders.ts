import { Provider, ValueOrPromise } from '@loopback/core';
import { SignupTokenHandlerFn } from '@sourceloop/authentication-service';
export class TokenHandlerProvider implements Provider<SignupTokenHandlerFn>{
    value(): ValueOrPromise<SignupTokenHandlerFn> {
        return async dto => {
            console.log(dto.code);
        }
    }
}