import { Locator, type Page } from '@playwright/test';
import { NavigationMenu } from './mainNavigationMenu/navigationMenu';
import { Filter } from './filters/filter';
import { AirbnbCategories } from './airbnbCategories/airbnbCategories';
import { SearchTab } from './search/search';

export class HeaderSection {
  private readonly page: Page;
  public readonly airbnbCategories: AirbnbCategories;
  public readonly filters: Filter;
  public readonly searchTab: SearchTab;
  public readonly navigationMenu: NavigationMenu;

  constructor(page: Page) {
    this.page = page;
    this.navigationMenu = new NavigationMenu(page);
    this.filters = new Filter(page);
    this.airbnbCategories = new AirbnbCategories(page);
    this.searchTab = new SearchTab(page);
  }
}
