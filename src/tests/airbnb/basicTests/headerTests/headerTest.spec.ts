import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { AccountSettings } from '../../../../pages/airbnb/exploreHeader/mainNavigationMenu/page/Account/accountSettings';
import { loadHomePage } from '../../../../utilities/helper';

test('header test', async ({ page }) => {
  const homepage = new HomePage(page);
  await loadHomePage(page);
  await homepage.header.navigationMenu.navMenuBtnLoggedout.navigateToGiftCards;
  await homepage.header.navigationMenu.navMenuBtnLoggedout.navigateToAirbnbYourHome;
  await page.pause();
  await homepage.header.navigationMenu.navMenuBtnLoggedout.navigateToHostExperience;
  await homepage.header.navigationMenu.navMenuBtnLoggedout.navigateToHelpCenter;
});

test('Apple login test', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.appleLogin;
});

test('Facebook login test', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.facebookLogin();
});

test('Google login test', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.googleLogin();
});

test('Loggedin - Email login test', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');
});

test('Loggedin - Account - Go to profile - createProfile & editProfile test', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  const accountSettings = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
  await accountSettings.goToProfile.createProfile('Engineer');
  await accountSettings.goToProfile.editProfile();
});

test('Loggedin - Message - Search for message', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  const message = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToMessage();
  await message.searchForAMessage('kjhjgfdfsgh');
});

test('Loggedin - Wishlists - Get title', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  const wishlists = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToWishlist();
  await wishlists.getPageTitle();
});

test('Loggedin - Trips - Get title', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  const trips = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToTrips();
  await trips.startSearchingForTrips();
});

test('Loggedin - Notifications - Get title', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  const notifications = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToNotification();
  await notifications.getPageTitle();
});

test('Loggedin - Log out', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);
  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');

  // Navigate to Account settings and store the instance
  await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToLogout();
});

test('Loggedout - Giftcards - Get title', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  const giftcards = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToGiftCards();
  await giftcards.getPageTitle();
});

test('Loggedout - Airbnb your home - Get URL', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  const airbnbYourHome = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToAirbnbYourHome();
  await airbnbYourHome.getPageURL();
});

test('Loggedout - Host an experience - Get URL', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  const hostAnExperience = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHostExperience();
  await hostAnExperience.getPageURL();
});

test('Loggedout - Help center - Get URL', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  const helpCenter = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHelpCenter();
  await helpCenter.getPageURL();
});

test('Example', async ({ page }) => {
  const homePage = new HomePage(page);
  await loadHomePage(page);

  await homePage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin('qaairbnb0@gmail.com', 'test12345?');
  const account = await homePage.header.navigationMenu.navMenuBtnLoggedin.navigateToAccount();
  await account.personalInfo.getPageURL();
});
