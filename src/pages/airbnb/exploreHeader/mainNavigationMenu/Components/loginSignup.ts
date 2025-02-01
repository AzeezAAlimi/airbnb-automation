import { expect, type Locator, type Page } from '@playwright/test';
import { NavMenuBtnLoggedout } from './navMenuBtnLoggedout';

export class LoginSignup {
  private readonly page: Page;
  private readonly navMenuBtnLoggedout: NavMenuBtnLoggedout;
  private readonly loginSignupBtn: Locator;
  private readonly continueWithAppleBtn: Locator;
  private readonly continueWithGoogleBtn: Locator;
  private readonly continueWithFacebookBtn: Locator;
  private readonly continueWithEmailBtn: Locator;
  private readonly emailLoginInput: Locator;
  private readonly SignupLoginContinueBtn: Locator;
  private readonly emailpasswordInput: Locator;

  constructor(page: Page, navMenuBtnLoggedout: NavMenuBtnLoggedout) {
    this.page = page;
    this.navMenuBtnLoggedout = navMenuBtnLoggedout;

    // Initialization Locators in the constructor
    this.loginSignupBtn = this.page.getByRole('link', { name: 'Log in' });
    this.continueWithAppleBtn = this.page.getByRole('dialog').getByTestId('social-auth-button-apple');
    this.continueWithGoogleBtn = this.page.getByRole('dialog').getByTestId('social-auth-button-google');
    this.continueWithFacebookBtn = this.page.getByRole('dialog').getByTestId('social-auth-button-facebook');
    this.continueWithEmailBtn = this.page.getByTestId('login-pane').getByTestId('social-auth-button-email');
    this.emailLoginInput = this.page.getByTestId('login-pane').getByTestId('email-login-email');
    this.SignupLoginContinueBtn = this.page.getByTestId('login-pane').getByTestId('signup-login-submit-btn');
    this.emailpasswordInput = this.page.getByTestId('login-pane').getByTestId('email-signup-password');
  }

  private async initiateLoginProcess() {
    await this.navMenuBtnLoggedout.OpenMenu();
    await this.loginSignupBtn.click({ force: true });
  }

  private async socialLogin(continueBtn: Locator, expectedTitle: string) {
    const [newTab] = await Promise.all([this.page.context().waitForEvent('page'), continueBtn.click()]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveTitle(expectedTitle);
    await newTab.close();
  }

  public async emailLogin(email: string, password: string) {
    await this.initiateLoginProcess();
    await this.page.getByRole('dialog', { name: 'Log in' }).click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.continueWithEmailBtn.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
    await this.emailLoginInput.click();
    await this.emailLoginInput.fill(email); //qaairbnb0@gmail.com
    await this.SignupLoginContinueBtn.click();
    await this.emailpasswordInput.fill(password); // test12345?
    await this.SignupLoginContinueBtn.click();
  }

  public async appleLogin() {
    await this.initiateLoginProcess();
    await this.socialLogin(this.continueWithAppleBtn, 'Sign in to Apple Account');
  }

  public async facebookLogin() {
    await this.initiateLoginProcess();
    await this.socialLogin(this.continueWithFacebookBtn, 'Facebook');
  }

  public async googleLogin() {
    await this.initiateLoginProcess();
    await this.socialLogin(this.continueWithGoogleBtn, 'Sign in - Google Accounts');
  }
}
