export default class BasePage {
    #label = title => `a[title="${title}"][role]`;
    #button = name => `button[aria-label="${name}"]`;
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
        'guideMenu': this.#button('Guide'),
        'profile': 'button#avatar-btn',
        'shownEmail': 'yt-formatted-string#email',
        'logo': 'ytd-topbar-logo-renderer[id="logo"]',
        'searchByText': 'input[id="search"]',
        'search': 'button#search-icon-legacy',
        'searchWithVoice': this.#button('Search with your voice'),
        'create': this.#button('Create'),
        'notifications': this.#button('Notifications'),
        'guide': 'tp-yt-app-drawer#guide',
        'home': this.#label('Home'),
        'shorts': this.#label('Shorts'),
        'subscriptions': this.#label('Subscriptions'),
        'library': this.#label('Library'),
        'history': this.#label('History'),
        'watchLater': this.#label('Watch later'),
        'likedVideos': this.#label('Liked videos'),
        'videos': 'div[class="style-scope ytd-rich-grid-renderer"][id="contents"]',
        'firstVideo': this.#video('title'),
        'videoContentsHeader': 'div[id="chips-wrapper"]',
        'youtube': this.#url(''),
        'choosedVideo': this.#url('watch?'),
    };

    async checkItem(name) {
        return await $(this.itemsLocators[name]);
    };

    async clickButton(buttonName) {
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

