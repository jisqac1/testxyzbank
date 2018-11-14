"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
class OpenAccount extends Action_1.Actions {
    constructor(select, value1) {
        super();
        this.clickOpenAccount = "//button[@ng-click='openAccount()']";
        this.customerName = "//*[contains(text(),'" + select + "')]";
        this.currency = "//*[contains(text(),'" + value1 + "')]";
        this.processClick = "//button[@type='submit']";
    }
    clickOpenAccountButton() {
        this.myClick(this.clickOpenAccount, "click on open account");
    }
    selectCustomerName() {
        this.dropDown(this.customerName, "select customer name");
    }
    selectCurrency() {
        this.dropDown(this.currency, "select currency name");
    }
    clickOnProcessButton() {
        this.myClick(this.processClick, "click on process button");
    }
}
exports.OpenAccount = OpenAccount;
//# sourceMappingURL=OpenAccount.js.map