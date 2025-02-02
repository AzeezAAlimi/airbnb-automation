import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedin navigation', () => {
  test('Loggedin - Message - Search for message', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    // Navigate to Account settings and store the instance
    const message = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToMessage();
    await message.searchForAMessage('kjhjgfdfsgh');
  });

  test('Loggedin - Wishlists - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const wishlists = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToWishlist();
    await wishlists.getPageTitle();
  });

  test('Loggedin - Trips - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const trips = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToTrips();
    await trips.startSearchingForTrips();
  });

  test('Loggedin - Notifications - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    const notifications = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToNotification();
    await notifications.getPageTitle();
  });

  test('Loggedin - Log out', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      'qaairbnb0@gmail.com',
      'test12345?',
    );
    await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToLogout();
  });
});
