"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
class AddCustomer extends Action_1.Actions {
    constructor() {
        super();
        this.clickAddCustomer = "//button[@ng-click='addCust()']";
        this.firstName = "fName";
        this.lastName = "lName";
        this.postcode = "postCd";
        this.generateCustomerID = "//button[@type='submit']";
    }
    clickAddCustomerButton() {
        this.myClick(this.clickAddCustomer, "Click on Add customer");
    }
    enterFirstName(keys) {
        this.sendKey(this.firstName, "enter first name", keys);
    }
    enterLastName(keys) {
        this.sendKey(this.lastName, "enter last name", keys);
    }
    enterPostcode(keys) {
        this.sendKey(this.postcode, "enter post code", keys);
    }
    addCustomerButtonClick() {
        this.myClick(this.generateCustomerID, "After clicking add customer it generates customer ID");
    }
}
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=addCustomer.js.map