import { test } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedin - Navigation - Account - Global Preferences - Change currency', () => {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
  test('Loggedin - Navigation - Account - Global Preferences - Change currency to EUR', async ({
    page,
  }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password,
    );
    const accountSettings =
      await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToEUR();
  });

  test('Loggedin - Navigation - Account - Global Preferences - Change currency to USD', async ({
    page,
  }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password,
    );
    const accountSettings =
      await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToUSD();
  });

  test('Loggedin - Navigation - Account - Global Preferences - Change currency to GBP', async ({
    page,
  }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password,
    );
    const accountSettings =
      await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
    await accountSettings.globalPreferences.changecurrencyToGBP();
  });
});
