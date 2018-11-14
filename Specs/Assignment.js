"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const bankmanager_1 = require("../pages/BankManagerTest/bankmanager");
const OpenAccount_1 = require("../pages/OpenAccount/OpenAccount");
let jsd = require('../Data/testData');
var customerdetails = new bankmanager_1.AddCustomer();
var openaccountdetails = new OpenAccount_1.OpenAccount(jsd.CustomerData1.firstname + " " + jsd.CustomerData1.lastname, jsd.CustomerData1.currency);
describe('Bankmanager Testing', function () {
    it('Launch and Enter Value in Bankmanger', () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser.get(jsd.CustomerData1.url);
        }
        catch (error) {
            console.log("error");
        }
    }));
    it('Click on Bank Manager Login Button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonBankmanagerLoginButton();
    }));
    it('Click on Add Customer Button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonAddCustomerButton();
    }));
    it('Enter the First Name Value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterfirstName(jsd.CustomerData1.firstname);
    }));
    it('Enter the Last Name Value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterLastName(jsd.CustomerData1.lastname);
    }));
    it('Enter the Postal Code', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterPostCode(jsd.CustomerData1.Code);
    }));
    it('Click on add customer button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.addCustomerButtonClick();
    }));
    it('Click on Open Account button', () => __awaiter(this, void 0, void 0, function* () {
        yield openaccountdetails.clickonOpenAccountButton();
    }));
    it('Click and select customer dropdown button', () => __awaiter(this, void 0, void 0, function* () {
        yield openaccountdetails.clickCustomerdropdown();
    }));
    it("select currency ", () => {
        openaccountdetails.selectCurrency();
    });
    it("click on Process button to generate account no", () => {
        openaccountdetails.clickOnProcessButton();
        var alertValidate = protractor_1.browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => {
            console.log(text);
            alertValidate.accept();
        });
    });
});
//# sourceMappingURL=Assignment.js.map