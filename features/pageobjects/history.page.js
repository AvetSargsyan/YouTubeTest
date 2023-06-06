import BasePage from "./base.page.js";

export default class HistoryPage extends BasePage {
    #watchHistoryText = 'ytd-text-header-renderer[header-style^="text"]';
    #searchInput = 'input[name="query"]';
    #clearButton = 'button[aria-label^="Clear all"]';
};