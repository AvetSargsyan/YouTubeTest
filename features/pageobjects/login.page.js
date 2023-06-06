import BasePage from "./base.page.js"

export default class LoginPage extends BasePage {
    #input = (inputName) => `input[type =${inputName}]`;

    itemsLocators = {
        'sign_in': '#headingText span',
        'email_input': this.#input('email'),
        'password_input': this.#input('password'),
        'profileIdentifier': 'div[jsname="bQIQze"]',
    };

    async getInput(inputName) {
        return await $(this.#input(inputName));
    };

    async setValue(text, inputField) {
        if (inputField === 'email_input') {
            return await $(this.#input('email')).setValue(text);
        } else if (inputField === 'password_input') {
            return await $(this.#input('password')).setValue(text);
        };
    };

    async profileIdentifiersText() {
        return await $(this.itemsLocators.profileIdentifier);
    };
};
