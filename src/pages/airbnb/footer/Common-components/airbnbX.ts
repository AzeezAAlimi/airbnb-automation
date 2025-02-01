import { expect, type Locator, type Page } from '@playwright/test';

export class AirbnbX {
  readonly page: Page;
  readonly airbnbXBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.airbnbXBtn = page.getByRole('link', { name: 'Navigate to Twitter' });
  }

  async clickonXBtn() {
    await this.airbnbXBtn.click();
    const [newTab] = await Promise.all([this.page.context().waitForEvent('page'), this.airbnbXBtn.click()]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL('https://x.com/airbnb?mx=2');
    await newTab.close();
  }
}
