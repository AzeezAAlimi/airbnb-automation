import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Search experience', () => {
  test('Loggedin - Search experience', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.searchTab.searchExperiences.searchForAExperience('France');
  });
  test('Loggedout - Search experience', async ({ page }) => {
    await homePage.header.searchTab.searchExperiences.searchForAExperience('France');
  });
});
