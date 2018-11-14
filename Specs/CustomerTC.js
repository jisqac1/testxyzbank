"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HomePage_1 = require("../pages/CustomerLogin/HomePage");
const CustomerSelection_1 = require("../pages/CustomerLogin/CustomerSelection");
const AccountsPage_1 = require("../pages/CustomerLogin/AccountsPage");
const protractor_1 = require("protractor");
const TransactionPage_1 = require("../pages/CustomerLogin/TransactionPage");
//import * as data from '../Data/testData';
let a = require('../Data/testData');
//import json= require('../Data/testData')
let openPage = new HomePage_1.HomePage(a.CustomerData.Title);
let customer = new CustomerSelection_1.CustomerSelection(a.CustomerData.name);
let accounts = new AccountsPage_1.AccountsPage(a.CustomerData.name, a.CustomerData.DAmt, a.CustomerData.Msg, a.CustomerData.WAmt, a.CustomerData.Msg1);
let transactions = new TransactionPage_1.Transaction(a.CustomerData.DAmt, a.CustomerData.WAmt);
describe('CUSTOMER LOGIN', () => {
    it('Open the browser', () => {
        protractor_1.browser.manage().window().maximize();
        openPage.Get();
    });
    it('Verify Title', () => {
        openPage.verifyTitle();
    });
    it('Color of Customer Login before MouseOver', () => {
        openPage.colorOfCustomerLoginButton();
    });
    /*
    it('Color of Customer Login after MouseOver', ()=>{
        openPage.colorssofCustomerLoginButton();
    }) */
    it('click customer login button', () => {
        openPage.clickLogin();
    });
    it('Select Customer from Drop Down', () => {
        customer.selectDropDown();
        protractor_1.browser.sleep(500);
    });
    it('Click on Login button', () => {
        customer.clickLoginButton();
    });
    it('verify customer title', () => {
        accounts.verifyTitle();
    });
    it('Click on Deposit Button', () => {
        accounts.depositButton();
    });
    it('Deposit amount', () => {
        accounts.depositAmount();
    });
    it('Click deposit button after entering amount', () => {
        accounts.afterDepositButton();
    });
    it('Verify Deposit Amount Message', () => {
        accounts.verifyAmountDepositMessage();
    });
    it('Amount deposited Value is: ', () => {
        accounts.printAmount();
    });
    it('Click on WithDrawl Button', () => {
        accounts.clickWithDrawlButton();
    });
    it('WithDraw Amount', () => {
        accounts.enterWithDrawAmount();
    });
    it('Click on WithDrawl Button after Entering Amount', () => {
        accounts.clickWithDrawButton();
    });
    it('Verify Withdraw Amount Message', () => {
        accounts.ConfirmWithDraw();
    });
    it('Remaining Balance is ', () => {
        accounts.printRemainingBalance();
    });
    it('Amount Debited in Transactions page', () => {
        accounts.TransactionButtonClick();
        protractor_1.browser.sleep(2000);
    });
    it('Credited Amount is ', () => {
        transactions.printAmountCredited();
    });
    it('Debited Amount is ', () => {
        transactions.printAmountDebited();
    });
    it('Click On Logout Button', () => {
        transactions.LogoutButton();
    });
    it('Click on Home Button', () => {
        openPage.clickHomeButton();
        protractor_1.browser.sleep(1500);
    });
});
//# sourceMappingURL=CustomerTC.js.map