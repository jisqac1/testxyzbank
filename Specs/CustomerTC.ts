
import {HomePage} from '../pages/CustomerLogin/HomePage';
import {CustomerSelection} from '../pages/CustomerLogin/CustomerSelection'
import {AccountsPage} from '../pages/CustomerLogin/AccountsPage'
import { browser } from 'protractor';
import { Transaction } from '../pages/CustomerLogin/TransactionPage';
//import * as data from '../Data/testData';
let a= require('../Data/testData')
//import json= require('../Data/testData')
let openPage= new HomePage(a.CustomerData.Title);
let customer= new CustomerSelection(a.CustomerData.name);
let accounts= new AccountsPage(a.CustomerData.name , a.CustomerData.DAmt , a.CustomerData.Msg , a.CustomerData.WAmt , a.CustomerData.Msg1);
let transactions= new Transaction(a.CustomerData.DAmt,a.CustomerData.WAmt)


describe('CUSTOMER LOGIN', ()=> {
    it('Open the browser', ()=>{
        browser.manage().window().maximize();
      openPage.Get();
    })
    it('Verify Title', ()=>{
        openPage.verifyTitle();
    })
  
   it('Color of Customer Login before MouseOver', ()=>{
    openPage.colorOfCustomerLoginButton();
    })
    /*    
    it('Color of Customer Login after MouseOver', ()=>{
        openPage.colorssofCustomerLoginButton();
    }) */
    it('click customer login button',()=>{
        openPage.clickLogin();
    })
    it('Select Customer from Drop Down', ()=>{
        customer.selectDropDown();
        browser.sleep(500)
    })
    it('Click on Login button', ()=>{
        customer.clickLoginButton();
    })

    it('verify customer title', ()=>{
        accounts.verifyTitle()
    })
    
    it('Click on Deposit Button', ()=>{
        accounts.depositButton();
    })
    it('Deposit amount', ()=>{
        accounts.depositAmount()
        
    })
    it('Click deposit button after entering amount', ()=>{
        accounts.afterDepositButton();
    })

    it('Verify Deposit Amount Message', ()=>{
        accounts.verifyAmountDepositMessage();
    })

    it('Amount deposited Value is: ',()=>{
        accounts.printAmount();
    })
    it('Click on WithDrawl Button', ()=>{
        accounts.clickWithDrawlButton();
    })
    
    it('WithDraw Amount' , ()=>{
        accounts.enterWithDrawAmount()
    })
  
    it('Click on WithDrawl Button after Entering Amount', ()=>{
        accounts.clickWithDrawButton();
       
    })
    it('Verify Withdraw Amount Message', ()=>{
        accounts.ConfirmWithDraw()
    })

    it('Remaining Balance is ', ()=>{
        accounts.printRemainingBalance()
    })

    
    it('Amount Debited in Transactions page', ()=>{
        accounts.TransactionButtonClick()
        browser.sleep(2000)
       
    })
    it('Credited Amount is ',()=>{
        transactions.printAmountCredited();
    })
    
    it('Debited Amount is ',()=>{
        transactions.printAmountDebited();
    })
    it('Click On Logout Button', ()=>{
        transactions.LogoutButton();
       
    })
    it('Click on Home Button', ()=>{
        openPage.clickHomeButton();
        browser.sleep(1500)
    })
})
