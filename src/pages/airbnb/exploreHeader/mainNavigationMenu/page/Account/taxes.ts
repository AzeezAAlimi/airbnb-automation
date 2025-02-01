import { expect, type Locator, type Page } from '@playwright/test';

export class Taxes {
  private readonly page: Page;
  private readonly taxes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.taxes = page.getByRole('link', { name: 'Taxes' });
  }

  public async getPageURL() {
    await this.taxes.click();
    await expect(this.page).toHaveURL('https://www.airbnb.com/account-settings/taxes/taxpayers');
  }
}
