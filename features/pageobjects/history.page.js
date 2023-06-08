import BasePage from "./base.page.js";

export default class HistoryPage extends BasePage {
    itemsLocators = {
        'WatchHistory': 'ytd-text-header-renderer[header-style^="text"]',
        'watchedVideo': '//ytd-video-renderer[@class="style-scope ytd-item-section-renderer"][1]',
        'HistoryType': '//h2[contains(text(), "History type")]',
        'Clear': 'button[aria-label^="Clear all"]',
        'searchWatchHistory': 'input[name="query"]',
        'PauseWatchHistory': 'button[aria-label="Pause watch history"]',
    };
};