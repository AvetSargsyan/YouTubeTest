import BasePage from "../pageobjects/base.page.js";
import LoginPage from "../pageobjects/login.page.js";
import HistoryPage from "../pageobjects/history.page.js"

const basePage = new BasePage();
const loginPage = new LoginPage();
const historyPage = new HistoryPage()

export default class BasicActions {
    getPageObject(pageName) {
        switch (pageName) {
            case 'basePage':
                return basePage;
            case 'loginPage':
                return loginPage;
            case 'historyPage':
                return historyPage;
        };
    };

    async clickOnButton(buttonName, pageName) {
        await this.getPageObject(pageName).clickButton(buttonName);
    };

    async checkForDisplayability(itemName, pageName) {
        await expect(this.getPageObject(pageName).checkItem(itemName)).toBeDisplayed();
    };

    async checkForClickability(itemName, pageName) {
        await expect(this.getPageObject(pageName).checkItem(itemName)).toBeClickable();
    };

    async checkForExistence(itemName, pageName) {
        await expect(this.getPageObject(pageName).checkItem(itemName)).toExist();
    };

    async checkThatPageIsOpen(pageName) {
        await expect(browser).toHaveUrlContaining(basePage.getUrl(pageName));
    }
};