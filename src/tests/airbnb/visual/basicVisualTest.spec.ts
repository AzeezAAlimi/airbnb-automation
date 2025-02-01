import { test, expect } from '@playwright/test';
import { HomePage } from '../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../utilities/helper';

test('Screenshot & visual comparison', async ({ page }) => {
  const homepage = new HomePage(page);
  await loadHomePage(page);
  await homepage.header.navigationMenu.navMenuBtnLoggedout.loginSignup.emailLogin();
  await page.getByTestId('header-tab-search-block-tab-STAYS').click();
  await page.getByTestId('structured-search-input-field-query').fill('cuba');
  await page.screenshot({ path: 'screenshot.png' });
});

test('Visual testing', async ({ page }) => {
  await page.goto('https://www.google.com/');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});
