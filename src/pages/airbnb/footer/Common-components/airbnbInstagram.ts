import { expect, type Locator, type Page } from '@playwright/test';

export class AirbnbInstagram {
  readonly page: Page;
  readonly airbnbInstagramBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.airbnbInstagramBtn = page.getByRole('link', { name: 'Navigate to Instagram' });
  }

  async clickonInstagramBtn() {
    const [newTab] = await Promise.all([this.page.context().waitForEvent('page'), this.airbnbInstagramBtn.click()]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://www.instagram.com/airbnb/');
    await newTab.close();
  }
}
