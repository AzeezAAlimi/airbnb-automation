import { expect, type Locator, type Page } from '@playwright/test';

export class YourPrivacyChoices {
  readonly page: Page;
  readonly yourPrivacyChoices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yourPrivacyChoices = page.getByRole('link', {
      name: 'Your Privacy Choices',
      exact: true,
    });
  }

  async clickonYourPrivacyChoices() {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.yourPrivacyChoices.click(),
    ]);

    await newTab.waitForLoadState();

    const heading = newTab.getByRole('heading', {
      name: 'Your privacy choices',
      exact: true,
    });
    await expect(heading).toContainText('Your privacy choices');

    await newTab.close();
  }
}
