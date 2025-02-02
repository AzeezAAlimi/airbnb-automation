import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { AccountSettings } from '../../../../../pages/airbnb/exploreHeader/mainNavigationMenu/page/Account/accountSettings';
import { loadHomePage } from '../../../../../utilities/helper';

test('Example', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');
  const account = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
  await account.personalInfo.getPageURL();
});
