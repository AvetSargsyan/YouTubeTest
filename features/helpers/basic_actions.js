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
};