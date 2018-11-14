import {browser,by,element} from 'protractor'

import {Actions} from '../../Actions/Action';

var heading;

export class Home extends Actions {
    verifyTitle: string;
    homeButton: string;
    titleColor: string;
    

    constructor(){
        super();
        this.titleColor = '//div[@class="box mainhdr"]'
        
        this.verifyTitle = '//strong[@class="mainHeading"]'
        this.homeButton = '//button[@ng-click="home()"]'
    }

public Get()
{
     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login").then(()=>{
        console.log("Browser launched");
   });
}

verifyTitleName() {
   element(by.xpath(this.verifyTitle)).getText().then((text) => { 
        //console.log(text);
   // let text1  = this.GetText(this.verifyTitle,"Check the given title");
        heading = "XYZ Bank"
        if(text == heading) {
            console.log("Print the title: " + heading);
        }
        else {
            console.log("title not matched: " + heading);
        }
    });
}

public homeButtonClick() {
    this.myClick(this.homeButton,"click on home button");
}

public checkColorOfTitleBg() {
    element(by.xpath(this.titleColor)).getCssValue('background-color').then((value) => { 
        console.log("Background color of title Page: " + value);
    });
}

}