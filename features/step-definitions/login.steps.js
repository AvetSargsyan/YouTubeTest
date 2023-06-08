import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from "../pageobjects/login.page.js";
import BasicActions from '../helpers/basic_actions.js';

const loginPage = new LoginPage();
const basicActions = new BasicActions();

When(/^Type "([^"]*)" into "([^"]*)" input$/, async (text, inputField) => {
    await loginPage.setValue(text, inputField);
});

Then(/^Check "([^"]*)" to be correct$/, async (mail) => {
    await expect(loginPage.profileIdentifiersText()).toHaveText(mail);
});

Then(/^Check "([^"]*)" input is displayed in "([^"]*)" page$/, async (itemName, pageName) => {
    await expect(basicActions.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
});
