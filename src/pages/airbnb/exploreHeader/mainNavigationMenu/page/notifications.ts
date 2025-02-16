import { expect, type Locator, type Page } from '@playwright/test';

export class Notifications {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async getPageTitle() {
    await expect(
      this.page.getByRole('heading', { name: 'Notifications' }),
    ).toContainText('Notifications');
  }
}
