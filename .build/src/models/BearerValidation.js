"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(header) {
    var Regex = /^Bearer\s[^\s]+$/g;
    return Regex.test(header);
}
exports.default = default_1;
//# sourceMappingURL=BearerValidation.js.map