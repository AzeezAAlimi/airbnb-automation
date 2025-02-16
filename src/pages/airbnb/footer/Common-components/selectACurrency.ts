import { expect, type Locator, type Page } from '@playwright/test';

export class ChooseACurrency {
  readonly page: Page;
  readonly chooseACurrencyBtn: Locator;
  readonly croatianKunaBtn: Locator;
  readonly euroEurBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chooseACurrencyBtn = page.getByRole('button', {
      name: 'Choose a currency kr SEK',
    });
    this.croatianKunaBtn = page
      .getByRole('dialog', { name: 'Currencies' })
      .getByRole('button', { name: 'Croatian kuna HRK – kn' });
    this.euroEurBtn = page
      .getByRole('dialog', { name: 'Currencies' })
      .getByRole('button', { name: 'Euro EUR – €' });
  }

  async clickonCroatianKunaBtn() {
    await this.chooseACurrencyBtn.click();
    await expect(
      this.page.getByRole('button', { name: 'Croatian kuna HRK – kn' }),
    ).toContainText('Croatian kunaHRK – kn');
    await this.croatianKunaBtn.click();
    await expect(
      this.page.getByRole('button', { name: 'Choose a currency Kn HRK' }),
    ).toHaveText('Choose a currencyknHRK');
  }

  async clickonEuroEurBtn() {
    await this.chooseACurrencyBtn.click();
    await expect(
      this.page.getByRole('button', { name: 'Euro EUR – €' }),
    ).toContainText('EuroEUR – €');
    await this.euroEurBtn.click();
    await expect(
      this.page.getByRole('button', { name: 'Choose a currency € EUR' }),
    ).toHaveText('Choose a currency€EUR');
  }
}
