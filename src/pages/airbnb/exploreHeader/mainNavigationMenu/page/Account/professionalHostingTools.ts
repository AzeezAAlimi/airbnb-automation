import { expect, type Locator, type Page } from '@playwright/test';

export class ProfessionalHostingTools {
  private readonly page: Page;
  private readonly professionalHostingTools: Locator;

  constructor(page: Page) {
    this.page = page;
    this.professionalHostingTools = page.getByRole('link', {
      name: 'Professional hosting tools',
    });
  }

  public async getPageURL() {
    await this.professionalHostingTools.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/professional-hosting',
    );
  }
}
