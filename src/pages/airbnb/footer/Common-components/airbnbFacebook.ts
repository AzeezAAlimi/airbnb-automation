import { expect, type Locator, type Page } from '@playwright/test';

export class AirbnbFacebook {
  readonly page: Page;
  readonly facebookBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.facebookBtn = page.getByRole('link', { name: 'Navigate to Facebook' });
  }

  async clickonFacebookBtn() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.facebookBtn.click(),
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://www.facebook.com/airbnb');
    await newTab.close();
  }
}
