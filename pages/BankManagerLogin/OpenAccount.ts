import {browser,by,element} from 'protractor'
import {Actions} from '../../Actions/Action';

export class OpenAccount extends Actions{
    clickOpenAccount: string;
    customerName: string;
    currency: string;
    processClick: string;

    constructor(select,value1) {
        super();
        this.clickOpenAccount = "//button[@ng-click='openAccount()']"
        this.customerName = "//*[contains(text(),'"+select+"')]"
        this.currency = "//*[contains(text(),'"+value1+"')]"
        this.processClick = "//button[@type='submit']"
    }

    public clickOpenAccountButton() {
        this.myClick(this.clickOpenAccount,"click on open account");
    }

    selectCustomerName(): any {
        this.dropDown(this.customerName,"select customer name");
    }

    selectCurrency() {
        this.dropDown(this.currency,"select currency name");
    }
    clickOnProcessButton() {
        this.myClick(this.processClick,"click on process button");
    }
}
