import { expect, type Locator, type Page } from '@playwright/test';

export class SearchExperiences {
  private readonly page: Page;
  private readonly experiencesTab: Locator;
  private readonly experiencesSearchDestinationTab: Locator;
  private readonly experiencesSearchDestinationResult: Locator;
  private readonly experiencesDatesTab: Locator;
  private readonly experiencesGuestsDetailsTab: Locator;
  private readonly experiencesGuestsAddAdult: Locator;
  private readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.experiencesTab = page.getByTestId('header-tab-search-block-tab-EXPERIENCES');
    this.experiencesSearchDestinationTab = page.getByTestId('structured-search-input-field-query');
    this.experiencesSearchDestinationResult = page
      .getByTestId('structured-search-input-field-query-panel')
      .getByTestId('option-0')
      .getByText('Havana, Cuba');
    this.experiencesDatesTab = page.getByTestId('structured-search-input-field-dates-button');
    this.experiencesGuestsDetailsTab = page.getByTestId('structured-search-input-field-guests-button');
    this.experiencesGuestsAddAdult = page.getByTestId('stepper-adults-increase-button');
    this.searchBtn = page.getByTestId('structured-search-input-search-button');
  }

  async searchForAExperience() {
    await this.experiencesTab.click();
    await this.experiencesSearchDestinationTab.fill('havana, cuba');
    await this.experiencesSearchDestinationResult.click();
    await this.experiencesDatesTab.click();
    await this.experiencesGuestsDetailsTab.click();
    await this.experiencesGuestsAddAdult.click();
    await this.searchBtn.click();
  }
}
