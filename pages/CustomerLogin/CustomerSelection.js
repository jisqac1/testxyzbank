"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
class CustomerSelection extends Action_1.Actions {
    constructor(name) {
        super();
        this.CustomerSelectionXpath = "//*[contains(text(),'" + name + "')]";
        this.LoginButtonXpath = "//button[@type='submit']";
    }
    selectDropDown() {
        this.dropDown(this.CustomerSelectionXpath, 'Selecting Drop Down');
    }
    clickLoginButton() {
        this.myClick(this.LoginButtonXpath, 'Clicked Login Button');
    }
}
exports.CustomerSelection = CustomerSelection;
//# sourceMappingURL=CustomerSelection.js.map