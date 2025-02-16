import { expect, type Locator, type Page } from '@playwright/test';

export class PrivacySndSharing {
  private readonly page: Page;
  private readonly privacyAndSharing: Locator;

  constructor(page: Page) {
    this.page = page;
    this.privacyAndSharing = page.getByRole('link', {
      name: 'Privacy & sharing',
    });
  }

  public async getPageURL() {
    await this.privacyAndSharing.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/privacy-and-sharing',
    );
  }
}
