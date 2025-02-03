import { test } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedin - Navigation - Account - Global Preferences - Change currency', () => {
  test('Loggedin - Navigation - Account - Global Preferences - Change currency to EUR', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToEUR();
  });

  test('Loggedin - Navigation - Account - Global Preferences - Change currency to USD', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToUSD();
  });

  test('Loggedin - Navigation - Account - Global Preferences - Change currency to GBP', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToGBP();
  });
});
