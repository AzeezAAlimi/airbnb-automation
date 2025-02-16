import { expect, type Locator, type Page } from '@playwright/test';

export class GuestReferrals {
  private readonly page: Page;
  private readonly guestReferrals: Locator;

  constructor(page: Page) {
    this.page = page;
    this.guestReferrals = page.getByRole('link', {
      name: 'Referral credit & coupon',
    });
  }

  public async getPageURL() {
    await this.guestReferrals.click();
    await expect(this.page).toHaveURL('https://www.airbnb.com/invite?r=51');
  }
}
