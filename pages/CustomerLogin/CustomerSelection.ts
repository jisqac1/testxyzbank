import {Actions} from '../../Actions/Action'
import { log } from 'util';

export class CustomerSelection extends Actions {
    CustomerSelectionXpath: string
    LoginButtonXpath: string
    
    constructor(name){
       super();
        this.CustomerSelectionXpath = "//*[contains(text(),'"+ name +"')]"
        this.LoginButtonXpath = "//button[@type='submit']"
    }

    selectDropDown(){
        
        this.dropDown(this.CustomerSelectionXpath,'Selecting Drop Down')

    }
    clickLoginButton() {
    this.myClick(this.LoginButtonXpath,'Clicked Login Button')

}}

