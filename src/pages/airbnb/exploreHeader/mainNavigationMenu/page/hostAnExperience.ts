import { expect, type Locator, type Page } from '@playwright/test';

export class HostAnExperience {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async getPageURL() {
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/host/experiences?from_nav=1',
    );
  }
}
