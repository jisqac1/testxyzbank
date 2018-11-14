"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankManagerPage_1 = require("../pages/BankManagerLogin/BankManagerPage");
const HomeBasePage_1 = require("../pages/BankManagerLogin/HomeBasePage");
const addCustomer_1 = require("../pages/BankManagerLogin/addCustomer");
const protractor_1 = require("protractor");
const OpenAccount_1 = require("../pages/BankManagerLogin/OpenAccount");
const deleteCustomer_1 = require("../pages/BankManagerLogin/deleteCustomer");
//import{jasmine} from '../node_modules/jasmine';
let a = require('../Data/testData');
//import { async } from 'q';
var del = new deleteCustomer_1.DelCustomer(a.CustomerData1.Code);
var homePage = new HomeBasePage_1.Home();
var managerClick = new BankManagerPage_1.BankManagerButton();
var openaccount = new OpenAccount_1.OpenAccount(a.CustomerData1.firstname + " " + a.CustomerData1.lastname, a.CustomerData1.currency);
var customerdetails = new addCustomer_1.AddCustomer();
describe("BANK MANAGER LOGIN", function () {
    it("Open the xyz bank url", () => {
        homePage.Get();
        protractor_1.browser.manage().window().maximize();
        homePage.verifyTitleName();
    });
    it("click on bank manager button", () => {
        managerClick.clickBankManagerButton();
    });
    it("Click on Add Customer button", () => {
        customerdetails.clickAddCustomerButton();
    });
    it("Enter the first name", () => {
        customerdetails.enterFirstName(a.CustomerData1.firstname);
    });
    it("Enter the last name", () => {
        customerdetails.enterLastName(a.CustomerData1.lastname);
    });
    it("Enter the post code", () => {
        customerdetails.enterPostcode(a.CustomerData1.Code);
    });
    it("Click on Add Customer Button to generte Customer ID", () => {
        customerdetails.addCustomerButtonClick();
        var alertDialog = protractor_1.browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then((text) => {
            console.log(text);
        });
        alertDialog.accept();
    });
    it("Go to homePage", () => {
        homePage.homeButtonClick();
    });
    it("Click on Bank Manager Button", () => {
        managerClick.clickBankManagerButton();
    });
    it("click on open account button", () => {
        openaccount.clickOpenAccountButton();
    });
    it("select customer name", () => {
        openaccount.selectCustomerName();
    });
    it("select currency ", () => {
        openaccount.selectCurrency();
    });
    it("click on Process button to generate account no", () => {
        openaccount.clickOnProcessButton();
        var alertValidate = protractor_1.browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => {
            console.log(text);
            alertValidate.accept();
        });
    });
    it("After generating account number go to homePage", () => {
        homePage.homeButtonClick();
    });
    it("Click on Bank Manager Button", () => {
        managerClick.clickBankManagerButton();
    });
    it("Click on Customer Button", () => {
        del.clickOnCustomerButton();
    });
    it("Click on Customer Button", () => {
        del.enterCustomerToBeDeleted(a.CustomerData1.Code);
    });
    it("Click on Customer Button", () => {
        del.selectCustomerNameToBeDeleted();
    });
    it("Go to homePage", () => {
        homePage.homeButtonClick();
    });
});
//# sourceMappingURL=BankManagerTC.js.map