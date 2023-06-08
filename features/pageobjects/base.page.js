export default class BasePage {
    #label = title => `a[title="${title}"][role]`;
    #video = (property) => {
        let locator = `//div[@id="content"][@class="style-scope ytd-rich-item-renderer"][1]`;

        if (property !== '') {
            locator += `//yt-formatted-string[@id="video-${property}"]`;
        };

        return locator;
    };
    #url = (name) => {
        let url = 'https://www.youtube.com/';

        if (name !== '') {
            url += name
        };

        return url;
    };

    itemsLocators = {
        'signIn': '//a[@aria-label="Sign in"]',
        'header': 'div[class="style-scope ytd-masthead"][id="container"]',
        'guideMenu': 'button[aria-label="Guide"]',
        'profile': 'button#avatar-btn',
        'shownEmail': 'yt-formatted-string#email',
        'logo': 'ytd-topbar-logo-renderer[id="logo"]',
        'search': 'input[id="search"]',
        'Search': 'button#search-icon-legacy',
        'SearchWithVoice': 'button[aria-label="Search with your voice"]',
        'Create': 'button[aria-label="Create"]',
        'Notifications': 'button[aria-label="Guide"]',
        'guide': 'tp-yt-app-drawer#guide',
        'Home': this.#label('Home'),
        'Shorts': this.#label('Shorts'),
        'Subscriptions': this.#label('Subscriptions'),
        'Library': this.#label('Library'),
        'History': this.#label('History'),
        'WatchLater': this.#label('Watch later'),
        'LikedVideos': this.#label('Liked videos'),
        'videos': 'div[class="style-scope ytd-rich-grid-renderer"][id="contents"]',
        'firstVideo': this.#video('title'),
        'shorts': 'div[class^="style-scope ytd-rich-section"]',  // no use
        'videoContentsHeader': 'div[id="chips-wrapper"]',
        'youtube': this.#url(''),
        'choosedVideo': this.#url('watch?'),
        'history': this.#url('feed/history'),
    };

    async checkItem(name) {
        return await $(this.itemsLocators[name]);
    };

    async clickButton(buttonName) {
        await $(this.itemsLocators[buttonName]).moveTo();

        return await $(this.itemsLocators[buttonName]).click({ force: true });
    };

    async getText(name) {
        return await $(this.itemsLocators[name]).getText();
    };

    getUrl(name) {
        return this.itemsLocators[name];
    };

    open(url) {
        return browser.url(url);
    };
};

