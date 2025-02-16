import { expect, type Locator, type Page } from '@playwright/test';

export class TravelForWork {
  private readonly page: Page;
  private readonly travelForWork: Locator;

  constructor(page: Page) {
    this.page = page;
    this.travelForWork = page.getByRole('link', { name: 'Travel for work' });
  }

  public async getPageURL() {
    await this.travelForWork.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/airbnb-for-work',
    );
  }
}
