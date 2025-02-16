import { expect, type Locator, type Page } from '@playwright/test';

export class AirbnbCategories {
  private readonly page: Page;
  private readonly iconsItem: Locator;
  private readonly tropicalItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iconsItem = page.getByTestId('category-item--Icons--unchecked');
    this.tropicalItem = page.getByTestId('category-item--Tropical--unchecked');
  }

  public async icons() {
    await this.iconsItem.click();
    await expect(this.page.getByTestId('category-item--Icons--checked'))
      .toBeTruthy;
  }

  public async tropical() {
    await this.tropicalItem.click();
    await expect(this.page.getByTestId('category-item--Tropical--checked'))
      .toBeTruthy;
  }
}
