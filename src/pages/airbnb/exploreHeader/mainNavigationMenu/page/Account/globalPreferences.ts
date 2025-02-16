import { expect, type Locator, type Page } from '@playwright/test';

export class GlobalPreferences {
  private readonly page: Page;
  private readonly globalPreferencesNav: Locator;
  private readonly editPreferredcurrency: Locator;
  private readonly currencyDropDown: Locator;
  private readonly saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.globalPreferencesNav = page.getByRole('link', {
      name: 'Global preferences',
    });
    this.editPreferredcurrency = page
      .getByRole('button', { name: 'Edit' })
      .nth(1);
    this.currencyDropDown = page.locator("[id='native_currency']");
    this.saveBtn = page.getByRole('button', { name: 'Save' });
  }

  public async changecurrencyToGBP() {
    await this.globalPreferencesNav.click();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('GBP');
    await this.saveBtn.click();
    await this.page.reload();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('SEK');
    await this.saveBtn.click();
  }

  public async changecurrencyToUSD() {
    await this.globalPreferencesNav.click();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('USD');
    await this.saveBtn.click();
    await this.page.reload();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('SEK');
    await this.saveBtn.click();
  }

  public async changecurrencyToEUR() {
    await this.globalPreferencesNav.click();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('EUR');
    await this.saveBtn.click();
    await this.page.reload();
    await this.editPreferredcurrency.click();
    await this.currencyDropDown.selectOption('SEK');
    await this.saveBtn.click();
  }
}
