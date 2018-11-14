"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
const protractor_1 = require("protractor");
class Transaction extends Action_1.Actions {
    constructor(val1, val) {
        super();
        this.val = val;
        this.logoutButtonXpath = "//button[@ng-click='byebye()']";
        this.CreditedAmountXpath = "//*[contains(text(),'" + val1 + "')]";
        this.DebitedAmountXpath = "//*[contains(text(),'" + val + "')]";
    }
    LogoutButton() {
        this.myClick(this.logoutButtonXpath, 'Clicking Logout Button');
    }
    printAmountCredited() {
        // this.GetText(this.CreditedAmountXpath,'Amount Credited is ')
        let ele = protractor_1.element(protractor_1.by.xpath(this.CreditedAmountXpath)).getText().then((text) => {
            console.log("Amount Credited is: " + text);
        });
    }
    printAmountDebited() {
        // this.GetText(this.DebitedAmountXpath,'Amount Debited is ')
        let ele = protractor_1.element(protractor_1.by.xpath(this.DebitedAmountXpath)).getText().then((text) => {
            console.log("Amount Debited is: " + text);
        });
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=TransactionPage.js.map