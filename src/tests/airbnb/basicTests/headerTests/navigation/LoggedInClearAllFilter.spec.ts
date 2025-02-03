import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Filter - Clear all filter', () => {
  test('Loggedout - Filter - Clear all filter', async ({ page }) => {
    await homePage.header.filters.clearAllFilter();
  });

  test('Loggedin - Filter - Clear all filter', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.filters.clearAllFilter();
  });

  test('Loggedout - Filter - Clear all filter + Selected filters', async ({ page }) => {
    await homePage.header.filters.clearRandomFilter();
  });

  test('Loggedin - Filter - Clear all filter + Selected filters', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.filters.clearRandomFilter();
  });
});
