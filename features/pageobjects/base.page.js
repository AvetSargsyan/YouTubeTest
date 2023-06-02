// import { DATA } from "../data/constants";

export default class BasePage {
    #guideButton = 'button[aria-label="Guide"]';
    #logoIcon = 'ytd-topbar-logo-renderer[id="logo"]';
    #searchField = 'input[id="search"]';
    #searchButton = 'button#search-icon-legacy';
    #voiceSearchButton = 'button[aria-label="Search with your voice"]';
    #guideMenu = 'tp-yt-app-drawer#guide';
    #historyButton = 'a[title="History"]';

    buttonsLocators = {
        'sign in': '//a[@aria-label="Sign in"]',
    };

    checkButton(buttonName) {
        return $(this.buttonsLocators[buttonName]);
    };

    clickButton(buttonName) {
        return $(this.buttonsLocators[buttonName]).click();
    };

    getText(locator) {
        return $(locator).getText();
    }

    open(url) {
        return browser.url(url);
    };

}

