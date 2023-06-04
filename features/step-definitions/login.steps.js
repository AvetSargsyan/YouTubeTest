import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from "../pageobjects/login.page.js";

const loginPage = new LoginPage();

Then(/^Check "([^"]*)" page is open$/, async (pageTitle) => {
    await expect(loginPage.checkItem(pageTitle)).toBeDisplayed();
});

Then(/^Check "([^"]*)" is exist$/, async (itemName) => {
    await console.log('#######################################', await loginPage.checkItem(itemName))
    await expect(loginPage.checkItem(itemName)).toExist();
});

When(/^Type "([^"]*)" into "([^"]*)" input$/, async (text, inputField) => {
    await loginPage.setValue(text, inputField);
});

Then(/^Check "([^"]*)" to be correct$/, async (mail) => {
    await expect(loginPage.profileIdentifiersText()).toHaveText(mail);
});
