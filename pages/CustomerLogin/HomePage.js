"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Action_1 = require("../../Actions/Action");
class HomePage extends Action_1.Actions {
    constructor(keys1) {
        super();
        this.HomeButtonXpath = "//button[@ng-click='home()']";
        this.keys1 = keys1;
        this.VerifyTitleXpath = "//strong[@class='mainHeading']";
        this.ClickCustomerLoginButton = "//button[@ng-click='customer()']";
        this.customerLoginColor = "//button[@ng-click='customer()']";
    }
    Get() {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        console.log("Browser Launched");
    }
    verifyTitle() {
        this.validateText(this.VerifyTitleXpath, 'verifying main title', this.keys1);
    }
    colorOfCustomerLoginButton() {
        let ele = protractor_1.element(protractor_1.by.xpath(this.ClickCustomerLoginButton));
        ele.getCssValue('background-color').then((value1) => {
            console.log("Color of Customer Login before MouseOver: " + value1);
            expect(value1).toBe("rgba(51, 122, 183, 1)");
        });
    }
    colorssofCustomerLoginButton() {
        let ele = protractor_1.element(protractor_1.by.xpath(this.ClickCustomerLoginButton));
        protractor_1.browser.actions().mouseMove(ele).perform();
        ele.getCssValue('background-color').then((value) => {
            console.log("Color of Customer Login after MouseOver: " + value);
            expect(value).toBe("rgba(40, 96, 144, 1)");
        });
    }
    // this.mouseHoverClick(this.ClickCustomerLoginButton,'Clicking Customer Login Button');
    clickLogin() {
        this.myClick(this.ClickCustomerLoginButton, "clicking login button ");
    }
    clickHomeButton() {
        this.myClick(this.HomeButtonXpath, 'Clicking Home Button');
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map