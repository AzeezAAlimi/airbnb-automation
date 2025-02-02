import { Page } from '@playwright/test';

export async function loadHomePage(page) {
  await page.goto('https://www.airbnb.com/');
}
