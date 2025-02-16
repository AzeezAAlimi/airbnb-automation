import { expect, type Locator, type Page } from '@playwright/test';

export class LoginAndSecurity {
  private readonly page: Page;
  private readonly loginAndSecurity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginAndSecurity = page.getByRole('link', {
      name: 'Login & security',
    });
  }

  public async getPageURL() {
    await this.loginAndSecurity.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/login-and-security',
    );
  }
}
