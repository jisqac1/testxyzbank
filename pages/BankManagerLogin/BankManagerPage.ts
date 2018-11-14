import {browser,element,by} from 'protractor'
import {Actions} from '../../Actions/Action';

export class BankManagerButton extends Actions {
    
    bankManagerClick:string;

    constructor(){
        super();
        this.bankManagerClick = "//button[@ng-click='manager()']"
    }

    public clickBankManagerButton(){
        this.myClick(this.bankManagerClick,'');
            }
        

}

