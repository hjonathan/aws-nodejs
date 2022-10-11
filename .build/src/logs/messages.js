"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    BEARER_MISSING: function () {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Bearer authorization is missing" }),
        };
    },
    ERROR_MESSAGE: function (msg) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: msg }),
        };
    },
    SUCCESS_MESSAGE: function (msg) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: msg }),
        };
    },
};
//# sourceMappingURL=messages.js.map