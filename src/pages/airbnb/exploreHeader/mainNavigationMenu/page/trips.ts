import { expect, type Locator, type Page } from '@playwright/test';

export class Trips {
  private readonly page: Page;
  private readonly startSearchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startSearchBtn = page.getByRole('link', { name: 'Start searching' });
  }

  public async startSearchingForTrips() {
    await this.startSearchBtn.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/?source=itinerary',
    );
  }
}
