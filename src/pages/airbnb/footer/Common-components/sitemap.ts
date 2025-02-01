import { expect, type Locator, type Page } from '@playwright/test';

export class SiteMap {
  readonly page: Page;
  readonly siteMap: Locator;

  constructor(page: Page) {
    this.page = page;
    this.siteMap = page.getByRole('link', { name: 'Sitemap' });
  }

  async clickonSiteMap() {
    await this.siteMap.click();
    await expect(this.page.getByRole('heading', { name: 'Top Destinations', exact: true })).toContainText(
      'Top Destinations',
    );
    await this.page.goBack();
  }
}
