import { Given, When, Then } from '@wdio/cucumber-framework'
import BasePage from '../pageobjects/base.page.js';
import LoginPage from '../pageobjects/login.page.js';

const basePage = new BasePage();
const loginPage = new BasePage();

Given(/^Open "([^"]*)" page$/, async (url) => {
    await basePage.open(url);

    await expect(browser).toHaveUrl(url)
});

Then(/^Check "([^"]*)" is displayed$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeDisplayed();
});

// Then(/^Check "([^"]*)" is exist$/, async (itemName) => {
//     await expect(basePage.checkItem(itemName)).toExist();
// });

Then(/^Check "([^"]*)" is clickable$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeClickable();
});

When(/^Click on "([^"]*)" button in "([^"]*)"$/, async (buttonName, pageName) => {
    switch (pageName) {
        case 'base_page':
            await basePage.clickButton(buttonName);
            break;
        case 'login_page':
            await loginPage.clickButton(buttonName);
            break;
    }

});

Then(/^Check redirecting to "([^"]*)" page$/, async (url) => {
    await expect(browser).toHaveUrl(url);
});

Then(/^Check "([^"]*)" is logged in$/, async (url) => {
    await expect(browser).toHaveUrl(url);
});

Then(/^Check "([^"]*)" is set in "([^"]*)"$/, async (mail, fieldName) => {
    await expect(basePage.checkItem(fieldName)).toHaveText(mail);
});

Then(/^Check "([^"]*)" is displayed in "([^"]*)"$/, async (itemName, containerName) => {
    await expect(basePage.checkItem(containerName)).toHaveChildren(basePage.checkItem(itemName));
});

When(/^Click on "([^"]*)" video$/, async (buttonName) => {
    await basePage.clickButton(buttonName);
});

Then(/^Check "([^"]*)" page is open$/, async (name) => {
    await expect(browser).toHaveUrlContaining(basePage.getUrl(name));
});

When(/^Maximize window$/, async () => {
    await browser.maximizeWindow();
});



// test
// When(/^Click on "([^"]*)" button test$/, async (buttonName) => {
//     await browser.pause(15000)
//     await basePage.clickButton(buttonName);
// });