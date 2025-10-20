import { expect, Page } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class HomePage extends BasePage {

    constructor(page: Page){
        super(page);
    }
    
    private get productsPageTitle(){
        return this.page.locator('.title');
    }

    private get firstProduct(){
        return this.page.locator('.inventory_item_img').first();
    }

    async isProductsTitleVisible(){
        await expect(this.productsPageTitle).toBeVisible();
    }

    async isFirstProductVisible(){
        await expect(this.firstProduct).toBeVisible();
    }

    async ClickOnFirstProduct(){
        await this.firstProduct.click();
    }
}