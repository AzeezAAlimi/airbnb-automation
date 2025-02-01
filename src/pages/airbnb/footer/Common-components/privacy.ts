import { expect, type Locator, type Page } from '@playwright/test';

export class Privacy {
  readonly page: Page;
  readonly privacy: Locator;

  constructor(page: Page) {
    this.page = page;
    this.privacy = page.getByRole('link', { name: 'Privacy', exact: true });
  }

  async clickonPrivacy() {
    await this.privacy.click();
    await expect(this.page.getByRole('heading', { name: 'Airbnb Privacy', exact: true })).toContainText(
      'Airbnb Privacy',
    );
    await this.page.goBack();
  }
}
