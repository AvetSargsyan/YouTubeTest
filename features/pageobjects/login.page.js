import BasePage from "./base.page.js"

export default class LoginPage extends BasePage {
    #input = (inputName) => `input[type =${inputName}]`;

    itemsLocators = {
        'next': '//span[@jsname="V67aGc" and text()="Next"]',
        'signIn': '#headingText span',
        'email': this.#input('email'),
        'password': this.#input('password'),
        'profileidentifier': 'div[jsname="bQIQze"]',
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
};
