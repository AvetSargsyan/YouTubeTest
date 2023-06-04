import { Given, When, Then } from '@wdio/cucumber-framework'
import BasePage from '../pageobjects/base.page.js';

const basePage = new BasePage();

Given(/^Open "([^"]*)" page$/, async (url) => {
    await basePage.open(url);

    await expect(browser).toHaveUrl(url)
});

Then(/^Check "([^"]*)" is displayed$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" is clickable$/, async (buttonName) => {
    await expect(basePage.checkItem(buttonName)).toBeClickable();
});

When(/^Click "([^"]*)" button$/, async (buttonName) => {
    await basePage.clickButton(buttonName);
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

Then(/^Check "([^"]*)" content is exist$/, async (contentName) => {
    await expect(basePage.checkItem(contentName)).toExist()
});