import { test, expect } from '@playwright/test';

test('Airbnb website using the browser fixture', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airbnb.com/');
  console.log(await page.title());
});

test('Airbnb website using the page fixture', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  console.log(await page.title());
  await expect(page).toHaveTitle('Airbnb | Vacation rentals, cabins, beach houses, & more');
});
