"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Action_1 = require("../../Actions/Action");
class OpenAccount extends Action_1.Actions {
    constructor(name, value1) {
        super();
        this.clickOpenAccout = "//button[@ng-click='openAccount()']";
        this.customerName = "//*[contains(text(),'" + name + "')]";
        this.currency = "//*[contains(text(),'" + value1 + "')]";
        this.processClick = "//button[@type='submit']";
    }
    clickonOpenAccountButton() {
        const btnlogin = protractor_1.element(protractor_1.by.xpath(this.openAccountbtn));
        if (btnlogin.isDisplayed()) {
            btnlogin.click();
        }
        else {
            console.log("element not displayed");
        }
    }
    selectCustomerName() {
        this.dropDown(this.customerName, "select customer name");
    }
    selectCurrency() {
        this.dropDown(this.customerName, "select currency name");
    }
    clickOnProcessButton() {
        this.myClick(this.processClick, "click on process button");
    }
    clickCustomerdropdown() {
        this.dropDown(this.CustomerSelectionXpath, 'Selecting Drop Down');
    }
}
exports.OpenAccount = OpenAccount;
//# sourceMappingURL=OpenAccount.js.map