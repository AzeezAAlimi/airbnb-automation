import { expect, type Locator, type Page } from '@playwright/test';

export class Terms {
  readonly page: Page;
  readonly terms: Locator;

  constructor(page: Page) {
    this.page = page;
    this.terms = page.getByRole('link', { name: 'Terms' });
  }

  async clickonTerms() {
    await this.terms.click();
    await expect(this.page.getByRole('heading', { name: 'Terms of Service', exact: true })).toContainText(
      'Terms of Service',
    );
    await this.page.goBack();
  }
}
