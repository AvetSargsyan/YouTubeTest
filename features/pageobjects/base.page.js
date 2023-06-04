export default class BasePage {
    #label = title => `a[title="${title}"][role]`;
    #video = (property) => {
        let locator = `//div[@id="content"][@class="style-scope ytd-rich-item-renderer"][1]`;

        if (property !== '') {
            locator += `//yt-formatted-string[@id="video-${property}"]`;
        };

        return locator;
    };

    itemsLocators = {
        'sign in': '//a[@aria-label="Sign in"]',
        'Next': '//span[@jsname="V67aGc" and text()="Next"]',
        'header': 'div[class="style-scope ytd-masthead"][id="container"]',
        'guide_menu_icon': 'button[aria-label="Guide"]',
        'profile': 'button#avatar-btn',
        'email_field': 'yt-formatted-string#email',
        'logo_icon': 'ytd-topbar-logo-renderer[id="logo"]',
        'search_field': 'input[id="search"]',
        'search_button': 'button#search-icon-legacy',
        'voice_button': 'button[aria-label="Search with your voice"]',
        'create_button': 'button[aria-label="Create"]',
        'notifications_button': 'button[aria-label="Guide"]',
        'guide_bar': 'tp-yt-app-drawer#guide',
        'home_label': this.#label('Home'),
        'shorts_label': this.#label('Shorts'),
        'subscriptions_label': this.#label('Subscriptions'),
        'library_label': this.#label('Library'),
        'history_label': this.#label('History'),
        'watch_later_label': this.#label('Watch later'),
        'liked_videos_label': this.#label('Liked videos'),
        'video_contents': this.#video(''),
        'video_title': this.#video('title')

    };

    async checkItem(name) {
        return await $(this.itemsLocators[name]);
    };

    async clickButton(buttonName) {
        return await $(this.itemsLocators[buttonName]).click();
    };

    async getText(name) {
        return await $(this.itemsLocators[name]).getText();
    };

    open(url) {
        return browser.url(url);
    };
};

