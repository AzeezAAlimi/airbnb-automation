import { expect, type Locator, type Page } from '@playwright/test';

export class GoToProfile {
  private readonly page: Page;
  private readonly goToProfile: Locator;
  private readonly createProfileBtn: Locator;
  private readonly myWorkBtn: Locator;
  private readonly myWorkInput: Locator;
  private readonly saveBtn: Locator;
  private readonly doneBtn: Locator;
  private readonly editProfileBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.goToProfile = page.getByRole('link', {
      name: 'Go to profile',
      exact: true,
    });
    this.createProfileBtn = page.getByRole('button', {
      name: 'Create profile',
      exact: true,
    });

    this.myWorkBtn = page.locator('button', { hasText: 'My work' });
    this.myWorkInput = page.getByLabel('My work: ');

    this.saveBtn = page
      .getByRole('dialog')
      .getByRole('button', { name: 'Save' });
    this.doneBtn = page.getByRole('button', { name: 'Done' }).nth(0);
    this.editProfileBtn = page.getByRole('button', {
      name: 'Edit profile',
      exact: true,
    });
  }

  public async createProfile(work: string) {
    await this.goToProfile.click();
    await this.createProfileBtn.click();

    await expect(this.myWorkBtn).toBeVisible();
    await this.myWorkBtn.click({ force: true });
    await this.myWorkInput.fill(work);
    await this.saveBtn.click({ force: true });
    const myWorkInputLabel = `My work: ${work}`;
    await expect(this.myWorkBtn).toContainText(myWorkInputLabel);

    await this.doneBtn.click({ force: true });
  }

  public async editProfile() {
    await this.editProfileBtn.click({ force: true });

    await this.myWorkBtn.click({ force: true });
    await this.myWorkInput.clear();
    await expect(this.myWorkInput).toBeEmpty();
    await this.saveBtn.click({ force: true });

    await this.doneBtn.click({ force: true });
    await expect(
      this.page.getByRole('button', { name: 'Create profile' }),
    ).toHaveText('Create profile');
  }
}
