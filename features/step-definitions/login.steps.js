import LoginPage from "../pageobjects/login.page";

const loginPage = new LoginPage();

Then(/^"([^"]*)" page is open$/, async (pageTitle) => {
    await expect(loginPage.checkButton(pageTitle)).toBeDisplayed();
});

Then(/^Check "([^"]*)" input is exist$/, async (inputName) => {
    await expect(loginPage.input(inputName)).toExist();
});

When(/^Type "([^"]*)" into "([^"]*)" input$/, async (text, inputField) => {
    await loginPage.setValue(text, inputField);
});

Then(/^Check "([^"]*)" button is exist$/, async (inputName) => {
    await expect(loginPage.checkButton(inputName)).toExist();
});

Then(/^Check "([^"]*)" button is clickable$/, async (inputName) => {
    await expect(loginPage.checkButton(inputName)).toBeClickable();
});

When(/^Click on "([^"]*)" button$/, async (buttonName) => {
    await loginPage.clickButton(buttonName)
});

Then(/^Check "([^"]*)" to be correct$/, async (mail) => {
    await expect(mail).toHaveText(loginPage.getText(loginPage.itemsLocators.set_email));
});
