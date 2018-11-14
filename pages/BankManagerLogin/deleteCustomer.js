"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
class DelCustomer extends Action_1.Actions {
    constructor(select) {
        super();
        this.clickOnCustomer = "//button[@ng-click='showCust()']";
        this.enterText = "searchCustomer";
        this.searchDeleteButton = "//td[contains(text(),'" + select + "')]/following-sibling::td[2]/button";
    }
    clickOnCustomerButton() {
        this.myClick(this.clickOnCustomer, "click on customer button");
    }
    enterCustomerToBeDeleted(value) {
        this.sendKey(this.enterText, "enter the customer name", value);
    }
    selectCustomerNameToBeDeleted() {
        this.dropDown(this.searchDeleteButton, "select the customer name");
    }
}
exports.DelCustomer = DelCustomer;
//# sourceMappingURL=deleteCustomer.js.map