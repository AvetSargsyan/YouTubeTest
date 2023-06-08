import BasePage from "./base.page.js";

export default class HistoryPage extends BasePage {
    #button = name => `button[aria-label^="${name}"]`;

    itemsLocators = {
        'watchHistory': 'ytd-text-header-renderer[header-style^="text"]',
        'watchedVideo': '//ytd-video-renderer[@class="style-scope ytd-item-section-renderer"][1]',
        'historyType': '//h2[contains(text(), "History type")]',
        'clear': this.#button('Clear all'),
        'searchWatchHistory': 'input[name="query"]',
        'pauseWatchHistory': this.#button('Pause '),
        'clearWatchHistory': this.#button('Clear w'),
        'emptyList': '//*[text()="This list has no videos."]',
    };
};