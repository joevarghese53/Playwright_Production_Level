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
    const loginPageScreenshot = await loginPage.takeScreenshot()
    test.info().attach('Login Page Screenshot', { body: loginPageScreenshot, contentType: 'image/png' });
    await loginPage.clickOnLoginButton()

    await homePage.isProductsTitleVisible()
    await homePage.isFirstProductVisible()
    await homePage.ClickOnFirstProduct()
    
    await productPage.checkProductTitle('Sauce Labs Backpack')

});