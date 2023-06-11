import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect as expectChai } from 'chai'
import BasePage from '../pageobjects/base.page.js';
import BasicActions from '../helpers/basic_actions.js';

const basePage = new BasePage();
const basicActions = new BasicActions();

let fontColor;

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

Then(/^Check "([^"]*)" label is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" content is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" video is displayed in "([^"]*)" page$/, async (itemName, pageName) => { //History page
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});

Then(/^Check "([^"]*)" language option is exist in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toExist();
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

Then(/^Check "([^"]*)" label is clickable in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeClickable();
});

When(/^Click on "([^"]*)" button in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.getPageObject(pageName).clickButton(buttonName)
});

When(/^Click on "([^"]*)" label in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.getPageObject(pageName).clickButton(buttonName)
});

When(/^Double click on "([^"]*)" label in "([^"]*)" page$/, async (buttonName, pageName) => {
    await basicActions.getPageObject(pageName).doubleClickButton(buttonName)
});

When(/^Scroll to "([^"]*)" label$/, async (itemName) => {
    await basePage.checkItem(itemName).scrollIntoView();
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

When(/^Click on "([^"]*)" video$/, async (buttonName) => {
    await basePage.clickButton(buttonName);
});

Then(/^Check "([^"]*)" page is open$/, async (pageName) => {
    await expect(browser).toHaveUrlContaining(basePage.getUrl(pageName));
});

Given(/^"([^"]*)" page is open$/, async (pageName) => {
    await expect(browser).toHaveUrlContaining(basePage.getUrl(pageName));
});

When(/^Maximize window$/, async () => {
    await browser.maximizeWindow();
});

When(/^Get "([^"]*)" title font color$/, async (element) => {
    fontColor = await basePage.getCSSProperty(element);
});

Then(/^Check "([^"]*)" title font color to be changed$/, async (itemName) => {
    const expectedFontColor = fontColor.value === 'rgba(15,15,15,1)' ? 'rgba(241,241,241,1)' : 'rgba(15,15,15,1)';
    const fontColorAfterInversion = await basePage.getCSSProperty(itemName);

    expectChai(fontColorAfterInversion.value).to.equal(expectedFontColor);
});

Then(/^Check "([^"]*)" input placeholder text to be changed to "([^"]*)"$/, async (itemName, expectedText) => {
    expect(await basePage.getPlaceholdersText(itemName)).toHaveText(expectedText);
});

// When(/^Pause$/, async () => {
//     await browser.pause(5000)
// })