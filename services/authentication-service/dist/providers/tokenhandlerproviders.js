"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHandlerProvider = void 0;
class TokenHandlerProvider {
    value() {
        return async (dto) => {
            console.log(dto.code);
        };
    }
}
exports.TokenHandlerProvider = TokenHandlerProvider;
//# sourceMappingURL=tokenhandlerproviders.js.map