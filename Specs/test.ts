import { browser, element, by } from "protractor";

describe('Launch URL',function()
{
    // it('Launch XYZ',function()
    // {
    //     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    // });
    // it('Open the browser', ()=>{
    //     browser.manage().window().maximize();
    //     browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
    //     browser.sleep(3000);
    // })
  

    it('Verify Title', ()=>{

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");


        var text: any = element(by.className('mainHeading'));
        expect(text.getText()).toBe('XYZ1 Bank');
        
    })
});