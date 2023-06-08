import BasePage from "./base.page.js"

export default class LoginPage extends BasePage {
    #input = (inputName) => `input[type =${inputName}]`;

    itemsLocators = {
        'Next': '//span[@jsname="V67aGc" and text()="Next"]',
        'signIn': '#headingText span',
        'email': this.#input('email'),
        'password': this.#input('password'),
        'profileIdentifier': 'div[jsname="bQIQze"]',
    };

    async getInput(inputName) {
        return await $(this.#input(inputName));
    };

    async setValue(text, inputField) {
        if (inputField === 'email') {
            return await $(this.#input('email')).setValue(text);
        } else if (inputField === 'password') {
            return await $(this.#input('password')).setValue(text);
        };
    };

    async profileIdentifiersText() {
        return await $(this.itemsLocators.profileIdentifier);
    };
};
