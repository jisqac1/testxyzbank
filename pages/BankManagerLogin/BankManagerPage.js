"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
class BankManagerButton extends Action_1.Actions {
    constructor() {
        super();
        this.bankManagerClick = "//button[@ng-click='manager()']";
    }
    clickBankManagerButton() {
        this.myClick(this.bankManagerClick, '');
    }
}
exports.BankManagerButton = BankManagerButton;
//# sourceMappingURL=BankManagerPage.js.map