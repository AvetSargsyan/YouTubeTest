import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from "../pageobjects/login.page.js";

const loginPage = new LoginPage();

When(/^Type "([^"]*)" into "([^"]*)" input$/, async (text, inputField) => {
    await loginPage.setValue(text, inputField);
});

Then(/^Check "([^"]*)" to be correct$/, async (mail) => {
    await expect(loginPage.profileIdentifiersText()).toHaveText(mail);
});
