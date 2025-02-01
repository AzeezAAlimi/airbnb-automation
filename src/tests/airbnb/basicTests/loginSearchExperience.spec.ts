// import { test, expect } from '@playwright/test';
// import { LoginFlow } from '../../../pages/loginFlow';
// import { SearchExperiences } from '../../../pages/searchExperiences';

// test('Search for cuba through experience', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://www.airbnb.com/');
//   const loginFlow = new LoginFlow(page);
//   await loginFlow.validEmailLogin();
//   const searchExperiences = new SearchExperiences(page);
//   await searchExperiences.searchForAExperience();
//   const cubaExperience = page.getByRole('group', { name: 'Walking Tour, Welcome to Havana' });
//   const [newPage] = await Promise.all([context.waitForEvent('page'), cubaExperience.click()]);
//   await newPage.getByRole('button', { name: 'Close' }).click();
// });
