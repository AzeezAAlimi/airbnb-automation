import { expect, type Locator, type Page } from '@playwright/test';

export class SearchStays {
  readonly page: Page;
  readonly staysTab: Locator;
  readonly staysSearchDestinationTab: Locator;
  readonly staysSearchDestinationResult: Locator;
  readonly staysCheckinTab: Locator;
  readonly staysCheckinDatesTab: Locator;
  readonly staysCheckoutTab: Locator;
  readonly staysCheckoutDatesTab: Locator;
  readonly staysMonthsDatesTab: Locator;
  readonly staysFlexibleTab: Locator;
  readonly staysFlexibleWeekendTab: Locator;
  readonly staysFlexibleWeekTab: Locator;
  readonly staysFlexibleMonthTab: Locator;
  readonly staysFlexibleSelectMonthTab: Locator;
  readonly staysGuestsDetailsTab: Locator;
  readonly staysGuestsAddAdult: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.staysTab = page.getByTestId('header-tab-search-block-tab-STAYS');
    this.staysSearchDestinationTab = page.getByTestId('structured-search-input-field-query');
    this.staysSearchDestinationResult = page
      .getByTestId('structured-search-input-field-query-panel')
      .getByTestId('option-0')
      .getByText('Havana, Cuba');
    this.staysCheckinTab = page.getByTestId('structured-search-input-field-split-dates-0');
    this.staysFlexibleTab = page.getByTestId('tab-list-wrapper').getByRole('tab', { name: 'Flexible' });
    this.staysFlexibleWeekTab = page.getByLabel('Week', { exact: true });
    this.staysFlexibleSelectMonthTab = page.getByTestId('carousel-chip').getByText('March');
    this.staysGuestsDetailsTab = page.getByTestId('structured-search-input-field-guests-button');
    this.staysGuestsAddAdult = page.getByTestId('stepper-adults-increase-button');
    this.searchBtn = page.getByTestId('structured-search-input-search-button');
  }

  async searchForAStay({}) {
    await this.staysTab.click();
    await this.staysSearchDestinationTab.fill('Havana, Cuba');
    await this.staysSearchDestinationResult.click();
    await this.staysCheckinTab.click();
    await this.staysFlexibleTab.click();
    await this.staysFlexibleWeekTab.click({ force: true });
    await this.staysFlexibleSelectMonthTab.click({ force: true });
    await this.staysGuestsDetailsTab.click({ force: true });
    await this.staysGuestsAddAdult.click();
    await this.searchBtn.click();
    // const cardTitle = await page.getByTestId('card-container');
    // console.log(await cardTitle.nth(0).textContent());
    // console.log(await cardTitle.nth(1).textContent());
    // console.log(await cardTitle.nth(2).textContent());
    // const allCardTitle = await cardTitle.allTextContents();
    // console.log(allCardTitle);
  }
}
