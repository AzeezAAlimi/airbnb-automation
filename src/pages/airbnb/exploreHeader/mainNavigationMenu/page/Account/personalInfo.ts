import { expect, type Locator, type Page } from '@playwright/test';

export class PersonalInfo {
  private readonly page: Page;
  private readonly personalInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalInfo = page.getByRole('link', { name: 'Personal info' });
  }

  public async getPageURL() {
    await this.personalInfo.click();
    await expect(this.page).toHaveURL('https://www.airbnb.com/account-settings/personal-info');
  }
}
