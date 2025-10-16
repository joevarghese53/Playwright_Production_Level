import { Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get usernameInput() {
        return this.page.locator('#user-name');
    }

    private get passwordInput() {
        return this.page.locator('#password');
    }

    private get loginButton() {
        return this.page.locator('#login-button');
    }

    async goto() {
        await this.page.goto('/');
    }

    async fillCredentials(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async clickOnLoginButton() {
        await this.waitForVisible(this.loginButton);
        await this.loginButton.click();
    }
}