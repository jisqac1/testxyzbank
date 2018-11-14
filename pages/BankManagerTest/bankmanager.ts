import {browser,by,element} from 'protractor';


export class AddCustomer {
    bankmanagerloginbtn: string;
    addcustomerbtn: string;
    firstName: string;
    lastName: string;
    postcode: string;
    generateCustomerID: string;

    constructor () {

        this.bankmanagerloginbtn= "//button[contains(text(),'Bank Manager Login')]";
        this.addcustomerbtn= "//button[@ng-class ='btnClass1']";
        this.firstName = "//input[@ng-model ='fName']";
        this.lastName = "//input[@ng-model ='lName']";
        this.postcode = "//input[@ng-model ='postCd']";
        this.generateCustomerID = "//button[@type ='submit']";

    }

public clickonBankmanagerLoginButton()
{
    const btnlogin = element(by.xpath(this.bankmanagerloginbtn));
     if (btnlogin.isDisplayed())
      {
        btnlogin.click();
     } 
     else
     {
        console.log("element not displayed");    
     }
     }
     catch (error){
         console.log("error had been displayed");
     }
    
public clickonAddCustomerButton() 
{
    const custbtn = element (by.xpath(this.addcustomerbtn));
    if (custbtn.isDisplayed())
    {
        custbtn.click();
    }
    else
    {
    console.log("customer button is not displayed");
}
}


enterfirstName(keys)
{
    const frstname = element(by.xpath(this.firstName));
    if (frstname.isDisplayed())
     {
       frstname.sendKeys(keys);
     }
     else
     {
       console.log("first name field is not displaying")
     }
}

enterLastName(keys)
{
const lstname = element(by.xpath(this.lastName));
    if(lstname.isDisplayed())
    {
      lstname.sendKeys(keys);
    }   
    else
    {
      console.log("last name field is not displaying");
    }
}
enterPostCode(keys)
{
    const pstlcode = element(by.xpath(this.postcode));
    if (pstlcode.isDisplayed())
      {
       pstlcode.sendKeys(keys);
      }
      else
    {
      console.log("postal code is not displayig")
     }
    }
public addCustomerButtonClick()
{
    const custbtn = element (by.xpath(this.generateCustomerID));

    if(custbtn.isDisplayed())
    {
      custbtn.click();
     }else
     {
        console.log("Submit button is not displaying");
     }

       const alertDialog = browser.switchTo().alert();
       alertDialog.accept();
       var text: any= alertDialog.getText();
       console.log(text);
}
}

