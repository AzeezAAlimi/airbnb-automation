import { Locator, Page } from '@playwright/test';
import { NavMenuBase } from '../shared/navMenuBase';
import { LoginSignup } from './loginSignup';

export class NavMenuBtnLoggedout extends NavMenuBase {
  // Components
  public readonly loginSignup: LoginSignup;

  constructor(page: Page) {
    super(page);

    // Initialize components
    this.loginSignup = new LoginSignup(page, this);
  }
}
