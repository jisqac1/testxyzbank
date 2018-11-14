"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Launch URL', function () {
    // it('Launch XYZ',function()
    // {
    //     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    // });
    // it('Open the browser', ()=>{
    //     browser.manage().window().maximize();
    //     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    //     browser.sleep(3000);
    // })
    it('Verify Title', () => {
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        var text = protractor_1.element(protractor_1.by.className('mainHeading'));
        expect(text.getText()).toBe('XYZ1 Bank');
    });
});
//# sourceMappingURL=test.js.map