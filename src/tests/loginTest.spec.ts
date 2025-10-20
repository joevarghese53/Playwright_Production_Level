import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { validUser } from "../data/TestData";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const productPage = new ProductPage(page)

    await loginPage.goto()
    await loginPage.fillCredentials(validUser.username, validUser.password)
    await loginPage.clickOnLoginButton()

    await homePage.isProductsTitleVisible()
    await homePage.isFirstProductVisible()

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        homePage.clickOnTwitterLink()
    ]);
    await newTab.waitForLoadState();
    await newTab.waitForTimeout(7000); // Wait for 7 seconds because of Zscaler
    const twitterScreenshot = await newTab.screenshot();
    test.info().attach('Twitter Page Screenshot', { body: twitterScreenshot, contentType: 'image/png' });

    await homePage.ClickOnFirstProduct()
    
    await productPage.checkProductTitle('Sauce Labs Backpack')
});