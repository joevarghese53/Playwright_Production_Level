import { Locator, Page } from '@playwright/test';

export class BasePage {

    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForVisible(locator: Locator){
        await locator.waitFor({ state: 'visible', timeout: 5000 });
    }

}