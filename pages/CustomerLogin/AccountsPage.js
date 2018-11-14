"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../Actions/Action");
const protractor_1 = require("protractor");
class AccountsPage extends Action_1.Actions {
    constructor(keys1, name, amountMessage, amountWithDraw, name1) {
        super();
        this.name = name;
        this.name1 = name1;
        this.keys1 = keys1;
        this.amountWithDraw = amountWithDraw;
        this.amountMessage = amountMessage;
        this.customerTitleXpath = "//span[contains(text(),'Harry')]";
        this.depositButtonXpath = "//button[@ng-class='btnClass2']";
        this.addAmount = "//input[@type='number']";
        this.verifyAmount = "//span[@ng-show='message']";
        this.AfterDepositButtonXpath = "//button[@type='submit']";
        this.amountDepositedXpath = "//*[contains(text(),'" + name + "')]";
        this.withDrawlButton = "//button[@ng-class='btnClass3']";
        this.enterAmountToWithDraw = "//input[@type='number']";
        this.afterAmountWithDrawlButton = "//button[@type='submit']";
        this.withDrawConfirmation = "//span[@ng-show='message']";
        this.transactionButtonXpath = "//button[@ng-class='btnClass1']";
        this.verifyWithDrawAmount = "//*[contains(text(),'" + name1 + "')]";
    }
    verifyTitle() {
        this.validateText(this.customerTitleXpath, 'Verifying Title', this.keys1);
    }
    depositButton() {
        this.myClick(this.depositButtonXpath, 'Clicking Deposit Button');
        protractor_1.browser.sleep(2000);
    }
    mouseMoveToAmount() {
        let ele = protractor_1.element(protractor_1.by.xpath(this.addAmount));
        protractor_1.browser.actions().mouseMove(ele).perform();
    }
    depositAmount() {
        this.mySendKeys(this.addAmount, 'Depositing Amount', this.name);
    }
    afterDepositButton() {
        this.myClick(this.AfterDepositButtonXpath, 'Click deposit button after depositing amount');
    }
    verifyAmountDepositMessage() {
        this.validateText(this.verifyAmount, 'Verify Amount', this.amountMessage);
        protractor_1.element(protractor_1.by.xpath(this.verifyAmount)).getCssValue('color').then((value1) => {
            console.log("Deposit successful text color is: " + value1);
        });
    }
    printAmount() {
        this.GetText(this.amountDepositedXpath, 'Amount Deposited is ');
        /* let ele=element(by.xpath(this.amountDepositedXpath)).getText().then((text)=>{
             console.log("Helllooooo"+text)
         })*/
    }
    clickWithDrawlButton() {
        this.myClick(this.withDrawlButton, 'Clicked WithDrawl Button ');
    }
    enterWithDrawAmount() {
        this.mySendKeys(this.enterAmountToWithDraw, 'Entering Amount ', this.amountWithDraw);
    }
    clickWithDrawButton() {
        this.myClick(this.afterAmountWithDrawlButton, 'Clicked withDraw Button');
    }
    ConfirmWithDraw() {
        this.validateText(this.withDrawConfirmation, 'confirm withDraw', this.name1);
        protractor_1.element(protractor_1.by.xpath(this.withDrawConfirmation)).getCssValue('color').then((value) => {
            console.log("Withdrawl successful text color is: " + value);
        });
    }
    printRemainingBalance() {
        this.GetText(this.verifyWithDrawAmount, 'Remaining Balance is ');
        protractor_1.browser.sleep(1000);
    }
    TransactionButtonClick() {
        this.myClick(this.transactionButtonXpath, 'Clicking Transaction Button ');
        protractor_1.browser.sleep(2000);
    }
}
exports.AccountsPage = AccountsPage;
//# sourceMappingURL=AccountsPage.js.map