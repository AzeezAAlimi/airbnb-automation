import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Airbnb categories', () => {
  test('Loggedin - Airbnb categories - Icons', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.airbnbCategories.icons();
  });

  test('Airbnb categories - Icons', async ({ page }) => {
    await homePage.header.airbnbCategories.icons();
  });
});
