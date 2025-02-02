import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Loggedout navigation', () => {
  test('Giftcards, Airbnb your home, Host an experience and Help center', async ({ page }) => {
    await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToGiftCards;
    await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToAirbnbYourHome;
    await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHostExperience;
    await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHelpCenter;
  });

  test('Loggedout - Giftcards', async ({ page }) => {
    const giftcards = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToGiftCards();
    await giftcards.getPageTitle();
  });

  test('Loggedout - Airbnb your home', async ({ page }) => {
    const airbnbYourHome = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToAirbnbYourHome();
    await airbnbYourHome.getPageURL();
  });

  test('Loggedout - Host an experience', async ({ page }) => {
    const hostAnExperience = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHostExperience();
    await hostAnExperience.getPageURL();
  });

  test('Loggedout - Help center', async ({ page }) => {
    const helpCenter = await homePage.header.navigationMenu.navMenuBtnLoggedout.navigateToHelpCenter();
    await helpCenter.getPageURL();
  });
});
