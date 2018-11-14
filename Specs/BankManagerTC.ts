
import { BankManagerButton } from '../pages/BankManagerLogin/BankManagerPage';
import { Home } from '../pages/BankManagerLogin/HomeBasePage';
import {AddCustomer} from '../pages/BankManagerLogin/addCustomer';
import { browser } from 'protractor';
import { OpenAccount } from '../pages/BankManagerLogin/OpenAccount';
import { DelCustomer } from '../pages/BankManagerLogin/deleteCustomer';
//import{jasmine} from '../node_modules/jasmine';
let a= require('../Data/testData');


//import { async } from 'q';

var del = new DelCustomer(a.CustomerData1.Code);
var homePage = new Home();
var managerClick = new BankManagerButton();
var openaccount = new OpenAccount(a.CustomerData1.firstname+" "+a.CustomerData1.lastname,a.CustomerData1.currency);

var customerdetails = new AddCustomer();

describe("BANK MANAGER LOGIN", function() {
    it("Open the xyz bank url", ()=>{
       homePage.Get();
       browser.manage().window().maximize();
       homePage.verifyTitleName();
      });

    it("click on bank manager button", () => { 
        managerClick.clickBankManagerButton();
       
    });
    it("Click on Add Customer button", () =>{ 
        customerdetails.clickAddCustomerButton();
    });
    it("Enter the first name", () =>{ 
        customerdetails.enterFirstName(a.CustomerData1.firstname);
    });

    it("Enter the last name", () =>{ 
        customerdetails.enterLastName(a.CustomerData1.lastname);
    });

    it("Enter the post code", () =>{ 
        customerdetails.enterPostcode(a.CustomerData1.Code);
    });
    
    it("Click on Add Customer Button to generte Customer ID", () =>{ 
        customerdetails.addCustomerButtonClick();
        var alertDialog  = browser.switchTo().alert();
        expect(alertDialog.accept).toBeDefined();
        alertDialog.getText().then((text)=>{
            console.log(text);
        })
        alertDialog.accept();
    });
    
    it("Go to homePage", () =>{ 
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
        var alertValidate = browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => { 
            console.log(text);
            alertValidate.accept();
        })
        
    });

    it("After generating account number go to homePage", () =>{ 
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
    
    it("Go to homePage", () =>{ 
         homePage.homeButtonClick();
            
        });

});




























