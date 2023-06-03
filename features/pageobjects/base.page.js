// import { DATA } from "../data/constants";

export default class BasePage {
    #guideButton = 'button[aria-label="Guide"]';
    #logoIcon = 'ytd-topbar-logo-renderer[id="logo"]';
    #searchField = 'input[id="search"]';
    #searchButton = 'button#search-icon-legacy';
    #voiceSearchButton = 'button[aria-label="Search with your voice"]';
    #guideMenu = 'tp-yt-app-drawer#guide';
    #historyButton = 'a[title="History"]';

    itemsLocators = {
        'sign in': '//a[@aria-label="Sign in"]',
        'Next': '//span[@jsname="V67aGc" and text()="Next"]',
        'profile': 'button#avatar-btn',
        'email': 'yt-formatted-string#email'
    };

    async checkItem(name) {
        return await $(this.itemsLocators[name]);
    };

    async clickButton(buttonName) {
        return await $(this.itemsLocators[buttonName]).click();
    };

    async getText(name) {
        return await $(this.itemsLocators[name]).getText();
    }

    open(url) {
        return browser.url(url);
    };

}

