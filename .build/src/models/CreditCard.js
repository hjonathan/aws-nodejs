"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    validate: function (cardNo) {
        var nDigits = cardNo.length;
        var nSum = 0;
        var isSecond = false;
        for (var i = nDigits - 1; i >= 0; i--) {
            var d = cardNo[i].charCodeAt() - "0".charCodeAt();
            if (isSecond == true)
                d = d * 2;
            // We add two digits to handle
            // cases that make two digits
            // after doubling
            nSum += parseInt(d / 10, 10);
            nSum += d % 10;
            isSecond = !isSecond;
        }
        return nSum % 10 == 0;
    },
};
//# sourceMappingURL=CreditCard.js.map