import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Homepage login test', () => {
  test('Apple login test', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.appleLogin;
  });

  test('Facebook login test', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.facebookLogin();
  });

  test('Google login test', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.googleLogin();
  });

  test('Email login test', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
  });
});
