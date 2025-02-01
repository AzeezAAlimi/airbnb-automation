import { expect, type Locator, type Page } from '@playwright/test';

export class ChooseALanguage {
  readonly page: Page;
  readonly chooseALanguageBtn: Locator;
  readonly deutschlandDeutschBtn: Locator;
  readonly danmarkDanskBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chooseALanguageBtn = page.getByRole('button', { name: 'Choose a language English (US)', exact: true });
    this.deutschlandDeutschBtn = page.getByRole('button', { name: 'Deutsch Deutschland' });
    this.danmarkDanskBtn = page.getByRole('button', { name: 'Dansk Danmark' });
  }

  async clickonDeutschLanguage() {
    await this.chooseALanguageBtn.click({ force: true });
    await this.deutschlandDeutschBtn.click();
    await expect(this.page.getByRole('button', { name: 'Alle akzeptieren' })).toContainText('Alle akzeptieren');
    await this.page
      .getByTestId('main-cookies-banner-container')
      .getByRole('button', { name: 'Alle akzeptieren' })
      .click();
    await this.page.close();
  }

  async clickonDanskLanguage() {
    await this.chooseALanguageBtn.click({ force: true });
    await this.danmarkDanskBtn.click();
    await expect(this.page.getByRole('button', { name: 'Accepter alle' })).toContainText('Accepter alle');
    await this.page.getByTestId('main-cookies-banner-container').getByRole('button', { name: 'Accepter alle' }).click();
    await this.page.close();
  }
}
