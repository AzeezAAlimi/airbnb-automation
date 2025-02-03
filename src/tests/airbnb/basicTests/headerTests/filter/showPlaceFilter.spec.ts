import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Filter - Show places', () => {
  test('Loggedout - Filter - Show 1000 places', async ({ page }) => {
    await homePage.header.filters.show1000PlacesFilter();
  });

  test('Loggedin - Filter - Show 1000 places', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.filters.show1000PlacesFilter();
  });

  test('Loggedout - Filter - Show the selected filter', async ({ page }) => {
    await homePage.header.filters.showPlacesFilter();
  });

  test('Loggedin - Filter - Show the selected filter', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.filters.showPlacesFilter();
  });
});
