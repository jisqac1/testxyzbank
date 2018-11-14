import {browser,by,element} from 'protractor';
import {Actions} from '../../Actions/Action';

export class AddCustomer extends Actions {
    clickAddCustomer: string;
    firstName: string;
    lastName: string;
    postcode: string;
    generateCustomerID: string;

    constructor() {
        super();
        this.clickAddCustomer= "//button[@ng-click='addCust()']"
        this.firstName = "fName";
        this.lastName = "lName";
        this.postcode = "postCd";
        this.generateCustomerID = "//button[@type='submit']"
    }

public clickAddCustomerButton() {
    this.myClick(this.clickAddCustomer,"Click on Add customer");
}

 enterFirstName(keys) {
     this.sendKey(this.firstName,"enter first name",keys);
 }

 enterLastName(keys) {
     this.sendKey(this.lastName,"enter last name",keys);
 }

enterPostcode(keys) {
    this.sendKey(this.postcode,"enter post code",keys);
}

addCustomerButtonClick() {
    this.myClick(this.generateCustomerID,"After clicking add customer it generates customer ID");
}

}


