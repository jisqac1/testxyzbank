
import { Actions } from "../../Actions/Action";
import { element , by } from 'protractor'

export class Transaction extends Actions {

    logoutButtonXpath: string
   CreditedAmountXpath: string
    DebitedAmountXpath: string
    val: string
    constructor(val1,val){
    super()

    this.val= val
    this.logoutButtonXpath="//button[@ng-click='byebye()']";
    this.CreditedAmountXpath="//*[contains(text(),'"+ val1 +"')]"
        this.DebitedAmountXpath="//*[contains(text(),'"+ val +"')]"
    }

    LogoutButton(){
        this.myClick(this.logoutButtonXpath,'Clicking Logout Button');
    
    }
    printAmountCredited(){
       // this.GetText(this.CreditedAmountXpath,'Amount Credited is ')
        let ele=element(by.xpath(this.CreditedAmountXpath)).getText().then((text)=>{
            console.log("Amount Credited is: "+text)
           
        })
    
    }
    printAmountDebited(){
       // this.GetText(this.DebitedAmountXpath,'Amount Debited is ')
    let ele= element(by.xpath(this.DebitedAmountXpath)).getText().then((text)=>{
        console.log("Amount Debited is: "+text)
    })
    }
   

}