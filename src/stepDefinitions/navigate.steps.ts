import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import { StepDefinitions, TableDefinition } from 'cucumber';
import { LandingPage } from "../pages/cba-landing.page";



chai.use(chaiAsPromised as any);
const expect = chai.expect;

export = function (this: StepDefinitions) {

    const landingPage: LandingPage = new LandingPage();

    this.Given(/^.*? is on commbank home page$/, async () => {
        await landingPage.open();
    });
    
    this.Given(/^.*? clicks on logon button$/, async () => {
        await landingPage.login();
        await landingPage.hasUserAndPwdFieldUnderNetBank();

    });

};