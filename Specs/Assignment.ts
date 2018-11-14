import {element, by, browser, ExpectedConditions} from "protractor";
import {async} from "q";
import { AddCustomer } from '../pages/BankManagerTest/bankmanager';
import { OpenAccount } from '../pages/OpenAccount/OpenAccount';
let jsd= require('../Data/testData');
var customerdetails = new AddCustomer();
var openaccountdetails = new OpenAccount
(jsd.CustomerData1.firstname+" "+jsd.CustomerData1.lastname,jsd.CustomerData1.currency);

describe('Bankmanager Testing', function(){
  it('Launch and Enter Value in Bankmanger', async()=>{
    try
    {
      await browser.get(jsd.CustomerData1.url);

    } catch (error){
      console.log("error")
    }
    
  });


  it('Click on Bank Manager Login Button', async()=>{
      await customerdetails.clickonBankmanagerLoginButton();
  });

  it('Click on Add Customer Button', async()=>{      
    await customerdetails.clickonAddCustomerButton();
  });

  it('Enter the First Name Value', async()=>{
    await customerdetails.enterfirstName(jsd.CustomerData1.firstname);  
  });

  it('Enter the Last Name Value', async()=>{
    await customerdetails.enterLastName(jsd.CustomerData1.lastname);  
  });

  it('Enter the Postal Code', async()=>{
      await customerdetails.enterPostCode(jsd.CustomerData1.Code);
    });

  it('Click on add customer button', async()=>{
      await customerdetails.addCustomerButtonClick();
    });
  
    it('Click on Open Account button', async()=>{
      await openaccountdetails.clickonOpenAccountButton();
    });

    it('Click and select customer dropdown button', async()=>{
      await openaccountdetails.clickCustomerdropdown();
  });

    it("select currency ", () => {
      openaccountdetails.selectCurrency();

    });  

    it ("click on Process button to generate account no", () => {
        openaccountdetails.clickOnProcessButton();
        var alertValidate = browser.switchTo().alert();
        expect (alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => {
              console.log(text);
              alertValidate.accept();
        })
     
      });

});


