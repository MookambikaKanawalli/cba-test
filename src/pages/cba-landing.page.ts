import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import { $, browser, by,  ElementFinder, protractor } from "protractor";
const EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised as any);
const expect = chai.expect;
        
export class LandingPage {
   
    public clientNumber: ElementFinder;
    public pwd: ElementFinder;
    public loginEle: ElementFinder;

    constructor() {
        // this.clientNumber = $('txtMyClientNumber$field');
        // this.pwd = $('txtMyPassword$field');
        this.loginEle = $('.log-on-text');
    }

    public async open() {
        await browser.get('/');
    }

    public async hasUserAndPwdFieldUnderNetBank() {
        await browser.sleep(1000);
        await browser.switchTo().frame(0)
        const isPresentCN = await  ( browser.isElementPresent(by.css("form:nth-child(1) #txtMyClientNumber_label")));
        const isPresentPWD = await browser.findElement(by.css("form:nth-child(1)  #txtMyPassword_field")).isDisplayed();


        await expect(isPresentCN).to.equal(true);
        await expect(isPresentPWD).to.equal(true);
    }

    public async login() {
        await browser.sleep(1000);
        await this.loginEle.click();
    }

}
