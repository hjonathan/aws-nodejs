"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInformation = void 0;
var z = require("zod");
var uuid_1 = require("uuid");
var CardInfoValidation = z.object({
    email: z.string().email(),
    card_number: z.string(),
    cvv: z.string().min(3).max(4),
    expiration_year: z.string().length(4),
    expiration_month: z.string().length(2),
});
var CardInformation = /** @class */ (function () {
    function CardInformation(email, card_number, cvv, expiration_year, expiration_month) {
        this.token = (0, uuid_1.v4)();
        this.email = email;
        this.cvv = cvv;
        this.card_number = card_number;
        this.expiration_year = expiration_year;
        this.expiration_month = expiration_month;
        this.created_at = new Date().toLocaleString();
    }
    CardInformation.prototype.get = function () {
        return {
            token: this.token,
            email: this.email,
            cvv: this.cvv,
            card_number: this.card_number,
            expiration_month: this.expiration_month,
            expiration_year: this.expiration_year,
            created_at: this.created_at,
        };
    };
    return CardInformation;
}());
exports.CardInformation = CardInformation;
exports.default = CardInfoValidation;
//# sourceMappingURL=CardInfoValidation.js.map