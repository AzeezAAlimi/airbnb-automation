import { expect, type Locator, type Page } from '@playwright/test';
import { SearchExperiences } from './searchExperiences';
import { SearchStays } from './searchStays';

export class SearchTab {
  private readonly page: Page;
  public readonly searchExperiences: SearchExperiences;
  public readonly searchStays: SearchStays;

  constructor(page: Page) {
    this.page = page;
    this.searchExperiences = new SearchExperiences(page);
    this.searchStays = new SearchStays(page);
  }
}
