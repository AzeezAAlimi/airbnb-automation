import { test } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';
import 'dotenv/config';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedin - Navigation', () => {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
  test('Loggedin - Message - Search for message', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    // Navigate to Account settings and store the instance
    const message = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToMessage();
    await message.searchForAMessage('kjhjgfdfsgh');
  });

  test('Loggedin - Wishlists - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    const wishlists = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToWishlist();
    await wishlists.getPageTitle();
  });

  test('Loggedin - Trips - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    const trips = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToTrips();
    await trips.startSearchingForTrips();
  });

  test('Loggedin - Notifications - Get title', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    const notifications = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToNotification();
    await notifications.getPageTitle();
  });

  test('Loggedin - Log out', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin(
      email,
      password
    );
    await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToLogout();
  });
});
