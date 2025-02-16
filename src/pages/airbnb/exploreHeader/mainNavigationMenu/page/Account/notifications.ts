import { expect, type Locator, type Page } from '@playwright/test';

export class Notifications {
  private readonly page: Page;
  private readonly notifications: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notifications = page.getByRole('link', { name: 'Notifications' });
  }

  public async getPageURL() {
    await this.notifications.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/notifications',
    );
  }
}
