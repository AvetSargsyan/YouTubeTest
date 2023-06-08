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

Then(/^Check "([^"]*)" title is displayed in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForDisplayability(buttonName, pageName)
});

Then(/^Check "([^"]*)" text is displayed in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForDisplayability(buttonName, pageName)
});

Then(/^Check "([^"]*)" button is displayed in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForDisplayability(buttonName, pageName)
});

Then(/^Check "([^"]*)" content is displayed in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForDisplayability(buttonName, pageName)
});

Then(/^Check "([^"]*)" video is displayed in "([^"]*)" page$/, async (buttonName, pageName) => { //History page
    await basicActions.checkForDisplayability(buttonName, pageName)
});

Then(/^Check "([^"]*)" is exist in "([^"]*)" page$/, async (itemName, pageName) => {
    await basicActions.checkForExistence(itemName, pageName)
});

Then(/^Check "([^"]*)" video is clickable in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForClickability(buttonName, pageName);
});

Then(/^Check "([^"]*)" button is clickable in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.checkForClickability(buttonName, pageName);
});

When(/^Click on "([^"]*)" button in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.clickOnButton(buttonName, pageName)
});

Then(/^Check "([^"]*)" is set in "([^"]*)" field$/, async (mail, fieldName) => {
    await expect(basePage.checkItem(fieldName)).toHaveText(mail);
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
    await basicActions.checkThatPageIsOpen(pageName)
});

When(/^Maximize window$/, async () => {
    await browser.maximizeWindow();
});



// test pause
When(/^pause$/, async () => {
    await browser.pause(20000);

    browser.acceptAlert()
});