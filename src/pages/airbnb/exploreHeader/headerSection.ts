import { Locator, type Page } from '@playwright/test';
import { NavigationMenu } from './mainNavigationMenu/navigationMenu';
import { Filter } from './filters/filter';

export class HeaderSection {
  private readonly page: Page;
  public readonly airbnbCategories: Locator;
  public readonly filters: Filter;
  public readonly search: Locator;
  public readonly navigationMenu: NavigationMenu;

  constructor(page: Page) {
    this.page = page;
    this.navigationMenu = new NavigationMenu(page);
    this.filters = new Filter(page);
  }
}
