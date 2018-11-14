"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Action_1 = require("../../Actions/Action");
var heading;
class Home extends Action_1.Actions {
    constructor() {
        super();
        this.titleColor = '//div[@class="box mainhdr"]';
        this.verifyTitle = '//strong[@class="mainHeading"]';
        this.homeButton = '//button[@ng-click="home()"]';
    }
    Get() {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login").then(() => {
            console.log("Browser launched");
        });
    }
    verifyTitleName() {
        protractor_1.element(protractor_1.by.xpath(this.verifyTitle)).getText().then((text) => {
            //console.log(text);
            // let text1  = this.GetText(this.verifyTitle,"Check the given title");
            heading = "XYZ Bank";
            if (text == heading) {
                console.log("Print the title: " + heading);
            }
            else {
                console.log("title not matched: " + heading);
            }
        });
    }
    homeButtonClick() {
        this.myClick(this.homeButton, "click on home button");
    }
    checkColorOfTitleBg() {
        protractor_1.element(protractor_1.by.xpath(this.titleColor)).getCssValue('background-color').then((value) => {
            console.log("Background color of title Page: " + value);
        });
    }
}
exports.Home = Home;
//# sourceMappingURL=HomeBasePage.js.map