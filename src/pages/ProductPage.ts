import { expect } from "@playwright/test";
import { BasePage } from "../core/BasePage";

export class ProductPage extends BasePage{

    constructor(page){
        super(page)
    }

    private get productTitle(){
        return this.page.locator('.inventory_details_name');
    }

    async checkProductTitle(title: string){
        await expect(this.productTitle).toHaveText(title);
    }
}