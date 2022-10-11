"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerValidation = void 0;
var z = require("zod");
var TokenValidation = z.object({
    token: z.string().length(36),
});
exports.BearerValidation = z.object({
    bearer: z.string().length(16),
});
exports.default = TokenValidation;
//# sourceMappingURL=TokenValidation.js.map