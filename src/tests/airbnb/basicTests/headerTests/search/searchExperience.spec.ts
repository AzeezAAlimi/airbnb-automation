import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Search experience', () => {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
  test('Loggedin - Search experience', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    await homePage.header.searchTab.searchExperiences.searchForAExperience('France');
  });
  test('Loggedout - Search experience', async ({ page }) => {
    await homePage.header.searchTab.searchExperiences.searchForAExperience('France');
  });
});
