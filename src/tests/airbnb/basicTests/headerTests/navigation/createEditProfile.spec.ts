import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test('Loggedin - Account - Go to profile - Create Profile & Edit Profile test', async ({ page }) => {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(email, password);
  const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
  await accountSettings.goToProfile.createProfile('Engineer');
  await accountSettings.goToProfile.editProfile();
});
