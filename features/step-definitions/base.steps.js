import { Given, When, Then } from '@wdio/cucumber-framework'
import BasePage from '../pageobjects/base.page.js';

const basePage = new BasePage();

Given(/^Open "([^"]*)" page$/, async (url) => {
    await basePage.open(url);

    await expect(browser).toHaveUrl(url)
});

Then(/^Check "([^"]*)" button is displayed$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" button is clickable$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeClickable();
});

When(/^Click "([^"]*)" button$/, async (buttonName) => {
    await basePage.clickButton(buttonName);
});

Then(/^Check redirecting to "([^"]*)" page$/, async (url) => {
    await expect(browser).toHaveUrl(url);
});

// Then(/^Check "([^"]*)" is logged in$/, async (url) => {
//     await expect(browser).toHaveUrl(url);
// });