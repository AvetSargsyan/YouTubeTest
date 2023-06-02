export default class BasicActions {
    async clickButton(button) {
        await expect(button).toBeDisplayed();
        await expect(button).toBeClickable();

        await button.click();
    };

    async inputValue(input, value) {
        await expect(input).toExist();

        await input.setValue(value);
    };
};