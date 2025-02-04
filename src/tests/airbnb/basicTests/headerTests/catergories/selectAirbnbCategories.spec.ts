import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Airbnb categories', () => {
  test('Loggedin - Airbnb categories - Icons', async ({ page }) => {
    const email = process.env.EMAIL!;
    const password = process.env.PASSWORD!;
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    await homePage.header.airbnbCategories.icons();
  });

  test('Airbnb categories - Icons', async ({ page }) => {
    await homePage.header.airbnbCategories.icons();
  });
});
