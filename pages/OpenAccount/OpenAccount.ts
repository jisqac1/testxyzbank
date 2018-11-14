import {browser,by,element,} from 'protractor';
import {Actions} from '../../Actions/Action';

export class OpenAccount extends Actions {
    clickOpenAccout: string;
    customerName: string;
    currency: string;
    processClick: string;
    openAccountbtn: string;
    CustomerSelectionXpath: string;
    

    constructor(name,value1) {
        super();
        this.clickOpenAccout = "//button[@ng-click='openAccount()']"
        this.customerName = "//*[contains(text(),'"+name+"')]"
        this.currency = "//*[contains(text(),'"+value1+"')]"
        this.processClick = "//button[@type='submit']"      
    }

public clickonOpenAccountButton()
{
    const btnlogin = element(by.xpath(this.openAccountbtn));
     if (btnlogin.isDisplayed())
      {
        btnlogin.click();
     } 
     else
     {
        console.log("element not displayed");    
     }
}

selectCustomerName(){
    this.dropDown(this.customerName,"select customer name");
}

selectCurrency(){
    this.dropDown(this.customerName,"select currency name");
}

clickOnProcessButton(){
    this.myClick(this.processClick,"click on process button")
}
public clickCustomerdropdown()
{
   this.dropDown(this.CustomerSelectionXpath,'Selecting Drop Down');

}

     
}