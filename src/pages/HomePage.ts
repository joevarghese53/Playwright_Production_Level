import { expect, Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class HomePage extends BasePage {

    constructor(page: Page){
        super(page);
    }
    
    private get productsTitle(){
        return this.page.locator('.title');
    }

    async isProductsTitleVisible(){
        await expect(this.productsTitle).toBeVisible();
    }
}