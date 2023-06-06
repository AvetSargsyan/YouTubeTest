import BasePage from "./base.page.js";

export default class HistoryPage extends BasePage {
    #watchHistoryText = 'ytd-text-header-renderer[header-style^="text"]';

    itemsLocators = {
        firstVideo: '//ytd-video-renderer[@class="style-scope ytd-item-section-renderer"][1]',
        clearButton: 'button[aria-label^="Clear all"]',
        searchWatchHistoryInput: 'input[name="query"]',
    };
};