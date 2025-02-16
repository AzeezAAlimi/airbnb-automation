import { expect, type Locator, type Page } from '@playwright/test';

export class SearchStays {
  private readonly page: Page;
  private readonly staysTab: Locator;
  private readonly staysSearchDestinationTab: Locator;
  private readonly staysSearchDestinationResult: Locator;
  private readonly staysCheckinTab: Locator;
  private readonly staysCheckinDatesTab: Locator;
  private readonly staysCheckoutTab: Locator;
  private readonly staysCheckoutDatesTab: Locator;
  private readonly staysMonthsDatesTab: Locator;
  private readonly staysFlexibleTab: Locator;
  private readonly staysFlexibleWeekendTab: Locator;
  private readonly staysFlexibleWeekTab: Locator;
  private readonly staysFlexibleMonthTab: Locator;
  private readonly staysFlexibleSelectMonthTab: Locator;
  private readonly staysGuestsDetailsTab: Locator;
  private readonly staysGuestsAddAdult: Locator;
  private readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.staysTab = page.getByTestId('header-tab-search-block-tab-STAYS');
    this.staysSearchDestinationTab = page.getByTestId(
      'structured-search-input-field-query',
    );
    this.staysSearchDestinationResult = page
      .getByTestId('structured-search-input-field-query-panel')
      .first();
    this.staysCheckinTab = page.getByTestId(
      'structured-search-input-field-split-dates-0',
    );
    this.staysFlexibleTab = page
      .getByTestId('tab-list-wrapper')
      .getByRole('tab', { name: 'Flexible' });
    this.staysFlexibleWeekTab = page.getByLabel('Week', { exact: true });
    this.staysFlexibleSelectMonthTab = page
      .getByTestId('carousel-chip')
      .getByText('March');
    this.staysGuestsDetailsTab = page.getByTestId(
      'structured-search-input-field-guests-button',
    );
    this.staysGuestsAddAdult = page.getByTestId(
      'stepper-adults-increase-button',
    );
    this.searchBtn = page.getByTestId('structured-search-input-search-button');
  }

  async searchForAStay(destination: string) {
    await this.staysTab.click();
    await this.staysSearchDestinationTab.fill(destination);
    await this.staysSearchDestinationResult.waitFor({ state: 'visible' });
    await this.staysSearchDestinationResult.click();
    await this.staysCheckinTab.click();
    await this.staysFlexibleTab.click();
    await this.staysFlexibleWeekTab.click({ force: true });
    await this.staysFlexibleSelectMonthTab.click({ force: true });
    await this.staysGuestsDetailsTab.click({ force: true });
    await this.staysGuestsAddAdult.click();
    await this.searchBtn.click();
  }
}
