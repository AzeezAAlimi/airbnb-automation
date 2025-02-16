import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedout - Navigation - Login', () => {
  test('Loggedout - Apple login', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup
      .appleLogin;
  });

  test('Loggedout - Facebook login', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.facebookLogin();
  });

  test('Loggedout - Google login', async ({}) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.googleLogin();
  });

  test('Loggedout - Email login', async ({}) => {
    const email = process.env.EMAIL!;
    const password = process.env.PASSWORD!;
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password,
    );
  });
});
