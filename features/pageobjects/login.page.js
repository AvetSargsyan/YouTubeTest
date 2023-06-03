// import { DATA } from "../data/constants.js";
import BasePage from "./base.page.js"

export default class LoginPage extends BasePage {
    #input = (inputeName) => `input[type =${inputeName}]`;
    // #passwordInput = 'input[type="password"]';
    // #newButton = '//span[@jsname="V67aGc" and text()="Next"]';
    #helloMessage = '#headingText span';
    #emailAddress = 'data-profile-identifier';

    itemsLocators = {
        'sign in': '#headingText span',
        'email': this.#input('email'),
        'password': this.#input('password'),
        'profileIdentifier': 'div[jsname="bQIQze"]',
    };

    async getInput(inputName) {
        console.log('########################', inputName)

        return await $(this.#input(inputName));
    };

    setValue(text, inputField) {
        if (inputField === 'email') {
            return $(this.#input(inputField)).setValue(text);
        } else if (inputField === 'password') {
            return $(this.#input(inputField)).setValue(text);
        };
    };

    async profileIdentifiersText() {
        return await $(this.itemsLocators.profileIdentifier);
    }

    // clickButton(buttonName) {
    //     return $(this.itemsLocators[buttonName]).click();
    // };
};
