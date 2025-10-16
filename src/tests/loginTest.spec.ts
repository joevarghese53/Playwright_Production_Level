import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { validUser } from "../data/TestData";
import { HomePage } from "../pages/HomePage";

test('Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)

    await loginPage.goto()
    await loginPage.fillCredentials(validUser.username, validUser.password)
    await loginPage.clickOnLoginButton()

    homePage.isProductsTitleVisible()

});