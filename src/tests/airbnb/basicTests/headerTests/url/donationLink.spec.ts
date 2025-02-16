import { test, expect } from '@playwright/test';
import { loadHomePage } from '../../../../../utilities/helper';

test('Click on the donation link', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await loadHomePage(page);
  const donationLink = page.getByRole('link', {
    name: 'Donate to help house families displaced by the LA wildfires',
  });
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    donationLink.click(),
  ]);
  const text = await newPage
    .getByRole('heading', { name: 'Donate today' })
    .textContent();
  console.log(text);
});
