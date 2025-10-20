import { Locator, Page } from '@playwright/test';

export class BasePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForVisible(locator: Locator){
        await locator.waitFor({ state: 'visible', timeout: 5000 });
    }

    async takeScreenshot(){
        return await this.page.screenshot();
    }

}