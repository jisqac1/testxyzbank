import {browser,by,element} from 'protractor'
import {Actions} from '../../Actions/Action';

export class DelCustomer extends Actions {
    clickOnCustomer: string;
    enterText: string;
    searchDeleteButton: string; 

    constructor(select) {
        super();
        this.clickOnCustomer = "//button[@ng-click='showCust()']"
        this.enterText = "searchCustomer";
        this.searchDeleteButton = "//td[contains(text(),'"+select+"')]/following-sibling::td[2]/button";
    }

    public clickOnCustomerButton() {
        this.myClick(this.clickOnCustomer,"click on customer button");
    }

    public enterCustomerToBeDeleted(value) {
        this.sendKey(this.enterText,"enter the customer name",value);
    }
    public selectCustomerNameToBeDeleted() {
        this.dropDown(this.searchDeleteButton,"select the customer name");
    } 

}