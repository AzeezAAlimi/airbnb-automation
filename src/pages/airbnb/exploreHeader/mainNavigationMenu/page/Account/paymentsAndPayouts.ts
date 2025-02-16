import { expect, type Locator, type Page } from '@playwright/test';

export class PaymentsAndPayouts {
  private readonly page: Page;
  private readonly paymentsAndPayouts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentsAndPayouts = page.getByRole('link', {
      name: 'Payments & payouts',
    });
  }

  public async getPageURL() {
    await this.paymentsAndPayouts.click();
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/account-settings/payments/payment-methods',
    );
  }
}
