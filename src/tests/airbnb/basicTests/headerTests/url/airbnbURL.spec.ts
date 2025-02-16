import { test, expect } from '@playwright/test';
import { loadHomePage } from '../../../../../utilities/helper';

test('Airbnb website using the browser fixture', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await loadHomePage(page);
  console.log(await page.title());
});

test('Airbnb website using the page fixture', async ({ page }) => {
  await loadHomePage(page);
  console.log(await page.title());
  await expect(page).toHaveTitle(
    'Airbnb | Vacation rentals, cabins, beach houses, & more',
  );
});
