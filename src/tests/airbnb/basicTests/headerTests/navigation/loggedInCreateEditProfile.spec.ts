import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test('Loggedin - Account - Go to profile - createProfile & editProfile test', async ({ page }) => {
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');
  const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
  await accountSettings.goToProfile.createProfile('Engineer');
  await accountSettings.goToProfile.editProfile();
});
