import { Given, When, Then } from '@wdio/cucumber-framework'
import BasePage from '../pageobjects/base.page.js';
import LoginPage from '../pageobjects/login.page.js';
import BasicActions from '../helpers/basic_actions.js';

const basePage = new BasePage();
const loginPage = new BasePage();
const basicActions = new BasicActions();

Given(/^Open "([^"]*)" page$/, async (url) => {
    await basePage.open(url);

    await expect(browser).toHaveUrl(url)
});

Then(/^Check "([^"]*)" title is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" text is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" button is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" content is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" video is displayed in "([^"]*)" page$/, async (itemName, pageName) => { //History page
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" is exist in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toExist();
});

Then(/^Check "([^"]*)" video is clickable in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeClickable();
});

Then(/^Check "([^"]*)" button is clickable in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeClickable();
});

When(/^Click on "([^"]*)" button in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.getPageObject(pageName).clickButton(buttonName)
});

Then(/^Check "([^"]*)" is set in "([^"]*)" field in "([^"]*)" page$/, async (mail, fieldName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(fieldName)).toHaveText(mail);
});

Then(/^Check "([^"]*)" icon to be child of "([^"]*)" content$/, async (itemName, containerName) => {
    await expect(basePage.checkItem(containerName)).toHaveChildren(basePage.checkItem(itemName));
});

Then(/^Check "([^"]*)" input to be child of "([^"]*)" content$/, async (itemName, containerName) => {
    await expect(basePage.checkItem(containerName)).toHaveChildren(basePage.checkItem(itemName));
});

Then(/^Check "([^"]*)" label to be child of "([^"]*)" sidebar$/, async (itemName, containerName) => {
    await expect(basePage.checkItem(containerName)).toHaveChildren(basePage.checkItem(itemName));
});

Then(/^Check "([^"]*)" button to be child of "([^"]*)" content$/, async (itemName, containerName) => {
    await expect(basePage.checkItem(containerName)).toHaveChildren(basePage.checkItem(itemName));
});

When(/^Click on "([^"]*)" video in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basePage.clickButton(buttonName);
});

Then(/^Check "([^"]*)" page is open$/, async (pageName) => {
    await expect(browser).toHaveUrlContaining(basePage.getUrl(pageName));
});

When(/^Maximize window$/, async () => {
    await browser.maximizeWindow();
});