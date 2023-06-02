import { Given, When, Then } from '@wdio/cucumber-framework'
// import PageFactory from '../pageobjects/factory.js';
// import { DATA } from '../data/constants.js';
import BasePage from '../pageobjects/base.page.js';


// const pageFactory = new PageFactory();
// const loginPage = pageFactory.createPage('LoginPage')
// const page = pageFactory.createPage('Page');
const basePage = new BasePage();

// const basicActions = pageFactory.createPage('BasicActions');


Given(/^Open "([^"]*)" page$/, async (url) => {
    await basePage.open(url);

    await expect(browser).toHaveUrl(url)
});

Then(/^Check "([^"]*)" button is displayed$/, async (buttonName) => {
    await expect(basePage.checkButton(buttonName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" button is clickable$/, async (buttonName) => {
    await expect(basePage.checkButton(buttonName)).toBeClickable();
});

When(/^Click "([^"]*)" button$/, async (buttonName) => {
    basePage.clickButton(buttonName);
});



// Then(/^"([^"]*)" page is open$/, async (pageTitle) => {
//     await expect(loginPage.checkItem(pageTitle)).toBeDisplayed();
// });

// Then(/^Check "([^"]*)" input is exist$/, async (inputName) => {
//     await expect(loginPage.input(inputName)).toExist();
// });

// When(/^Type "([^"]*)" into input$/, async (input) => {
//     await loginPage.setValue(input);
// });

// Then(/^Check "([^"]*)" button in login page is exist$/, async (inputName) => {
//     await expect(loginPage.checkButton(inputName)).toExist();
// });

// Then(/^Check "([^"]*)" button in login page is clickable$/, async (inputName) => {
//     await expect(loginPage.checkButton(inputName)).toBeClickable();
// });

// When(/^Click on "([^"]*)" button$/, async (buttonName) => {
//     await loginPage.clickButton(buttonName)
// });

// Then(/^Check "([^"]*)" to be correct$/, async (mail) => {
//     await expect(loginPage.checkItem(mail)).toHaveText(DATA.ACCOUNT_EMAIL);
// });




// Then(/^Should navigate to sign in page$/, async () => {
//     expect(await loginPage.elementForIdentifyThePage).toHaveText(DATA.SIGN_IN);
// });

// When(/^I input email$/, async () => {
//     await basicActions.inputValue(loginPage.emailInput, DATA.ACCOUNT_EMAIL)
// });

// When(/^I click next button$/, async () => {
//     await basicActions.clickButton(loginPage.nextButton);
// });

// Then(/^Hello message is appeared with email address$/, async () => {
//     expect(await loginPage.helloMessage).toHaveText(DATA.WELCOME_MESSAGE);
//     expect(loginPage.emailName).toHaveText(DATA.ACCOUNT_EMAIL);
// });

// When(/^I input password$/, async () => {
//     await 
// })



