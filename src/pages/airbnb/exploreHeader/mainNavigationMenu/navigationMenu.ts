import { Page } from '@playwright/test';
import { NavMenuBtnLoggedout } from './Components/navMenuBtnLoggedout';
import { NavMenuBtnLoggedin } from './Components/navMenuBtnLoggedin';

export class NavigationMenu {
  private readonly page: Page;
  public readonly navMenuBtnLoggedout: NavMenuBtnLoggedout;
  public readonly navMenuBtnLoggedin: NavMenuBtnLoggedin;

  constructor(page: Page) {
    this.page = page;
    this.navMenuBtnLoggedout = new NavMenuBtnLoggedout(page);
    this.navMenuBtnLoggedin = new NavMenuBtnLoggedin(page);
  }
}
