
import {browser, element,by} from 'protractor'
import {Actions} from '../../Actions/Action'

export class HomePage extends Actions {
   
    VerifyTitleXpath: string
    ClickCustomerLoginButton: string
    keys1: string
    customerLoginColor: string;
    HomeButtonXpath: string
    
    constructor(keys1){
        super();
        
        this.HomeButtonXpath= "//button[@ng-click='home()']"
        this.keys1=keys1
        this.VerifyTitleXpath= "//strong[@class='mainHeading']"
        this.ClickCustomerLoginButton= "//button[@ng-click='customer()']";
        this.customerLoginColor = "//button[@ng-click='customer()']"
    }

   Get(){
    
    
    browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        console.log("Browser Launched")
    }


     verifyTitle(){
         
       this.validateText(this.VerifyTitleXpath,'verifying main title',this.keys1)
      
    }

      colorOfCustomerLoginButton(){
       let ele=element(by.xpath(this.ClickCustomerLoginButton))
       ele.getCssValue('background-color').then((value1)=>{
        console.log("Color of Customer Login before MouseOver: " + value1);
        expect(value1).toBe("rgba(51, 122, 183, 1)")
       });
    }
       colorssofCustomerLoginButton(){
        let ele=element(by.xpath(this.ClickCustomerLoginButton))
        browser.actions().mouseMove(ele).perform();
        ele.getCssValue('background-color').then((value)=>{
           console.log("Color of Customer Login after MouseOver: " + value)
           expect(value).toBe("rgba(40, 96, 144, 1)");
       })
    }
       // this.mouseHoverClick(this.ClickCustomerLoginButton,'Clicking Customer Login Button');
     clickLogin(){
        this.myClick(this.ClickCustomerLoginButton,"clicking login button ");
    }

     clickHomeButton(){
        this.myClick(this.HomeButtonXpath,'Clicking Home Button')
    }
}