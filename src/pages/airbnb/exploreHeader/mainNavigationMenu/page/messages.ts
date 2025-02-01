import { expect, type Locator, type Page } from '@playwright/test';

export class Messages {
  private readonly page: Page;
  private readonly searchAllMessageBtn: Locator;
  private readonly searchAllMessageInput: Locator;
  private readonly messageSettingBtn: Locator;
  private readonly cancelBtn: Locator;
  private readonly closeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchAllMessageBtn = page.getByRole('button', { name: 'Search' });
    this.searchAllMessageInput = page.getByRole('textbox', { name: 'Search' });
    this.messageSettingBtn = page.getByRole('button', { name: 'Messaging Settings' });
    this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
    this.closeBtn = page.getByRole('button', { name: 'Close' });
  }

  public async searchForAMessage(message: string) {
    await this.searchAllMessageBtn.click();
    await this.searchAllMessageInput.click();
    await this.searchAllMessageInput.fill(message);
    await expect(this.page.getByText('We couldn’t find any messages')).toContainText('We couldn’t find any messages');
    await this.cancelBtn.click();
  }

  public async clickOnMessageSettings() {
    await this.messageSettingBtn.click();
    await this.closeBtn.click();
  }
}
