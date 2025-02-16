import { expect, type Locator, type Page } from '@playwright/test';

export class Filter {
  private readonly page: Page;
  private readonly filterBtn: Locator;
  private readonly typeOfPlaceAnyTypeBtn: Locator;
  private readonly typeOfPlaceRoomBtn: Locator;
  private readonly typeOfPlaceEntireHomeBtn: Locator;
  private readonly minPriceRangeInputBtn: Locator;
  private readonly maxPriceRangeInputBtn: Locator;
  private readonly increaseNoOfBedRoomsBtn: Locator;
  private readonly increaseNoOfBedsBtn: Locator;
  private readonly increaseNoOfBathRoomsBtn: Locator;
  private readonly decreaseNoOfBedRoomsBtn: Locator;
  private readonly decreaseNoOfBedsBtn: Locator;
  private readonly decreaseNoOfBathRoomsBtn: Locator;

  private readonly noOfBedRoomsValue: Locator;
  private readonly noOfBedsValue: Locator;
  private readonly noOfBathRoomsValue: Locator;

  private readonly showMoreAmenitieaBtn: Locator;
  private readonly amenitiesWifiBtn: Locator;
  private readonly amenitiesKitchenBtn: Locator;
  private readonly amenitiesWasherBtn: Locator;
  private readonly amenitiesDryerBtn: Locator;
  private readonly amenitiesACBtn: Locator;
  private readonly amenitiesHeatingBtn: Locator;
  private readonly amenitiesWorkSpaceBtn: Locator;
  private readonly amenitiesTVBtn: Locator;
  private readonly amenitiesHairDryerBtn: Locator;
  private readonly amenitiesIronBtn: Locator;
  private readonly amenitiesPoolBtn: Locator;
  private readonly amenitiesHotTubBtn: Locator;
  private readonly amenitiesParkingBtn: Locator;
  private readonly amenitiesEVChargerBtn: Locator;
  private readonly amenitiesCribBtn: Locator;
  private readonly amenitiesKingBedBtn: Locator;
  private readonly amenitiesGymBtn: Locator;
  private readonly amenitiesBbqGrillBtn: Locator;
  private readonly amenitiesBreakfastBtn: Locator;
  private readonly amenitiesFirePlaceBtn: Locator;
  private readonly amenitiesAllowSmokingBtn: Locator;
  private readonly beachFrontBtn: Locator;
  private readonly waterFrontBtn: Locator;
  private readonly smokeAlarmBtn: Locator;
  private readonly carbonMonoxideAlarmBtn: Locator;
  private readonly instantBookBtn: Locator;
  private readonly selfCheckInBtn: Locator;
  private readonly allowsPetsBtn: Locator;
  private readonly guestFavoriteBtn: Locator;
  private readonly propertyTypeSection: Locator;
  private readonly houseBtn: Locator;
  private readonly apartmentBtn: Locator;
  private readonly guestHouseBtn: Locator;
  private readonly hotelBtn: Locator;
  private readonly accessibilityFeaturesSection: Locator;
  private readonly stepFreeAccessBtn: Locator;
  private readonly disabledParkingSpotBtn: Locator;
  private readonly bigGuestEntranceBtn: Locator;
  private readonly stepFreeBedRoomAccessBtn: Locator;
  private readonly bigBedRoomEntranceBtn: Locator;
  private readonly stepFreeBathRoomAccessBtn: Locator;
  private readonly bigBathRoomEntranceBtn: Locator;
  private readonly toiletGrabBarBtn: Locator;
  private readonly showerGrabBarBtn: Locator;
  private readonly stepFreeShowerBtn: Locator;
  private readonly showerOrBathChairBtn: Locator;
  private readonly ceilingOrMobileHoistBtn: Locator;
  private readonly hostLanguageSection: Locator;
  private readonly chineseLangBtn: Locator;
  private readonly englishLangBtn: Locator;
  private readonly frenchLangBtn: Locator;
  private readonly germanLangBtn: Locator;
  private readonly italianLangBtn: Locator;
  private readonly japaneseLangBtn: Locator;
  private readonly koreanLangBtn: Locator;
  private readonly portugueseLangBtn: Locator;
  private readonly russianLangBtn: Locator;
  private readonly spanishLangBtn: Locator;
  private readonly arabicLangBtn: Locator;
  private readonly catalanLangBtn: Locator;
  private readonly croatianLangBtn: Locator;
  private readonly czechLangBtn: Locator;
  private readonly danishLangBtn: Locator;
  private readonly dutchLangBtn: Locator;
  private readonly finnishLangBtn: Locator;
  private readonly greekLangBtn: Locator;
  private readonly hebrewLangBtn: Locator;
  private readonly hindiLangBtn: Locator;
  private readonly hungarianLangBtn: Locator;
  private readonly icelandicLangBtn: Locator;
  private readonly indonesianLangBtn: Locator;
  private readonly malayLangBtn: Locator;
  private readonly norwegianLangBtn: Locator;
  private readonly polishLangBtn: Locator;
  private readonly swedishLangBtn: Locator;
  private readonly thaiLangBtn: Locator;
  private readonly turkishLangBtn: Locator;
  private readonly afrikaansLangBtn: Locator;
  private readonly belarusianLangBtn: Locator;
  private readonly bengaliLangBtn: Locator;
  private readonly bulgarianLangBtn: Locator;
  private readonly estonianLangBtn: Locator;
  private readonly filipinoLangBtn: Locator;
  private readonly kannadaLangBtn: Locator;
  private readonly khmerLangBtn: Locator;
  private readonly latvianLangBtn: Locator;
  private readonly lithuanianLangBtn: Locator;
  private readonly punjabiLangBtn: Locator;
  private readonly romanianLangBtn: Locator;
  private readonly serbianLangBtn: Locator;
  private readonly slovakianLangBtn: Locator;
  private readonly slovenianLangBtn: Locator;
  private readonly swahiliLangBtn: Locator;
  private readonly tagalogLangBtn: Locator;
  private readonly ukrainianLangBtn: Locator;
  private readonly vietnameseLangBtn: Locator;
  private readonly clearAllBtn: Locator;
  private readonly showPlaceBtn: Locator;
  private readonly closeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterBtn = page.getByTestId('category-bar-filter-button');
    this.typeOfPlaceAnyTypeBtn = page.getByRole('radio', { name: 'Any type' });
    this.typeOfPlaceRoomBtn = page.getByRole('radio', { name: 'Room' });
    this.typeOfPlaceEntireHomeBtn = page.getByRole('radio', {
      name: 'Entire home',
    });
    this.minPriceRangeInputBtn = page.locator('[id="price_filter_min"]');
    this.maxPriceRangeInputBtn = page.locator('[id="price_filter_max"]');
    this.increaseNoOfBedRoomsBtn = page.getByTestId(
      'stepper-filter-item-min_bedrooms-stepper-increase-button',
    );
    this.increaseNoOfBedsBtn = page.getByTestId(
      'stepper-filter-item-min_beds-stepper-increase-button',
    );
    this.increaseNoOfBathRoomsBtn = page.getByTestId(
      'stepper-filter-item-min_bathrooms-stepper-increase-button',
    );
    this.decreaseNoOfBedRoomsBtn = page.getByTestId(
      'stepper-filter-item-min_bedrooms-stepper-decrease-button',
    );
    this.decreaseNoOfBedsBtn = page.getByTestId(
      'stepper-filter-item-min_beds-stepper-decrease-button',
    );
    this.decreaseNoOfBathRoomsBtn = page.getByTestId(
      'stepper-filter-item-min_bathrooms-stepper-decrease-button',
    );
    this.noOfBedRoomsValue = page.getByTestId(
      'stepper-filter-item-min_bedrooms-stepper-value',
    );
    this.noOfBedsValue = page.getByTestId(
      'stepper-filter-item-min_beds-stepper-value',
    );
    this.noOfBathRoomsValue = page.getByTestId(
      'stepper-filter-item-min_bathrooms-stepper-value',
    );
    this.showMoreAmenitieaBtn = page.getByRole('button', { name: 'Show more' });
    this.amenitiesWifiBtn = page.getByRole('button', { name: 'Wifi' });
    this.amenitiesHeatingBtn = page.getByRole('button', { name: 'Heating' });
    this.amenitiesIronBtn = page.getByRole('button', { name: 'Iron' });
    this.amenitiesPoolBtn = page.getByRole('button', { name: 'Pool' });
    this.amenitiesGymBtn = page.getByRole('button', { name: 'Gym' });
    this.amenitiesBbqGrillBtn = page.getByRole('button', { name: 'BBQ grill' });
    this.waterFrontBtn = page.getByRole('button', { name: 'Waterfront' });
    this.amenitiesAllowSmokingBtn = page.getByRole('button', {
      name: 'Smoke alarm',
    });
    this.instantBookBtn = page.getByRole('button', { name: 'Instant Book' });
    this.allowsPetsBtn = page.getByRole('button', { name: 'Allows pets' });
    this.guestFavoriteBtn = page.getByRole('button', {
      name: 'Guest favorite',
    });
    this.propertyTypeSection = page.getByRole('button', {
      name: 'Property type',
    });
    this.apartmentBtn = page.getByRole('button', { name: 'Apartment' });
    this.hotelBtn = page.getByRole('button', { name: 'Hotel' });
    this.accessibilityFeaturesSection = page.getByRole('button', {
      name: 'Accessibility features',
    });
    this.stepFreeAccessBtn = page.getByRole('checkbox', {
      name: 'Step-free access',
    });
    this.bigBedRoomEntranceBtn = page.getByRole('checkbox', {
      name: 'Bedroom entrance wider than 32 inches',
    });
    this.toiletGrabBarBtn = page.getByRole('checkbox', {
      name: 'Toilet grab bar',
    });
    this.stepFreeShowerBtn = page.getByRole('checkbox', {
      name: 'Step-free shower',
    });
    this.ceilingOrMobileHoistBtn = page.getByRole('checkbox', {
      name: 'Ceiling or mobile hoist',
    });
    this.hostLanguageSection = page.getByRole('button', {
      name: 'Host language',
    });
    this.englishLangBtn = page.getByRole('checkbox', { name: 'English' });
    this.spanishLangBtn = page.getByRole('checkbox', { name: 'Spanish' });
    this.dutchLangBtn = page.getByRole('checkbox', { name: 'Dutch' });
    this.clearAllBtn = page.getByRole('button', { name: 'Clear all' });
    this.showPlaceBtn = page.getByRole('link', { name: /Show \d+ places/ });
    this.closeBtn = page.getByRole('button', { name: 'Close' });
  }

  async clearRandomFilter() {
    await this.filterBtn.click();
    await this.typeOfPlaceAnyTypeBtn.click();
    await this.typeOfPlaceRoomBtn.click();
    await this.typeOfPlaceEntireHomeBtn.click();
    await expect(this.typeOfPlaceEntireHomeBtn).toBeChecked();
    await this.minPriceRangeInputBtn.fill('120');
    await this.maxPriceRangeInputBtn.fill('4710');
    await this.increaseNoOfBedRoomsBtn.click();
    await expect(this.noOfBedRoomsValue).toContainText('1+');
    await this.increaseNoOfBedsBtn.click();
    await expect(this.noOfBedsValue).toContainText('1+');
    await this.increaseNoOfBathRoomsBtn.click();
    await expect(this.noOfBathRoomsValue).toContainText('1+');
    await this.decreaseNoOfBedRoomsBtn.click();
    await expect(this.noOfBedRoomsValue).toContainText('Any');
    await this.decreaseNoOfBedsBtn.click();
    await expect(this.noOfBedsValue).toContainText('Any');
    await this.decreaseNoOfBathRoomsBtn.click();
    await expect(this.noOfBathRoomsValue).toContainText('Any');
    await this.showMoreAmenitieaBtn.click();
    await this.amenitiesWifiBtn.click();
    await this.amenitiesHeatingBtn.click();
    await this.amenitiesIronBtn.click();
    await this.amenitiesPoolBtn.click();
    await this.amenitiesGymBtn.click();
    await this.amenitiesBbqGrillBtn.click();
    await this.waterFrontBtn.click();
    await this.amenitiesAllowSmokingBtn.click();
    await this.instantBookBtn.click();
    await this.allowsPetsBtn.click();
    await this.guestFavoriteBtn.click();
    await this.propertyTypeSection.click();
    await this.apartmentBtn.click();
    await this.hotelBtn.click();
    await this.accessibilityFeaturesSection.click();
    await this.stepFreeAccessBtn.check();
    await expect(this.stepFreeAccessBtn).toBeChecked();
    await this.stepFreeAccessBtn.uncheck();
    await expect(this.stepFreeAccessBtn).not.toBeChecked();
    await this.bigBedRoomEntranceBtn.check();
    await this.toiletGrabBarBtn.check();
    await this.stepFreeShowerBtn.check();
    await this.ceilingOrMobileHoistBtn.check();
    await this.hostLanguageSection.click();
    await this.englishLangBtn.check();
    await this.spanishLangBtn.check();
    await this.dutchLangBtn.check();
    await this.clearAllBtn.click();
    await this.closeBtn.click();
  }

  async showPlacesFilter() {
    await this.filterBtn.click();
    await this.typeOfPlaceAnyTypeBtn.click();
    await expect(this.typeOfPlaceAnyTypeBtn).toBeChecked();
    await this.minPriceRangeInputBtn.fill('120');
    await this.maxPriceRangeInputBtn.fill('4710');
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await expect(this.noOfBedRoomsValue).toContainText('3+');
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await expect(this.noOfBedRoomsValue).toContainText('Any');
    await this.amenitiesWifiBtn.click();
    await this.amenitiesHeatingBtn.click();
    await this.instantBookBtn.click();
    await this.propertyTypeSection.click();
    await this.apartmentBtn.click();
    await this.hostLanguageSection.click();
    await this.englishLangBtn.check();
    //await this.clearAllBtn.click();
    await this.showPlaceBtn.click();
  }

  async show1000PlacesFilter() {
    await this.filterBtn.click();
    await this.showPlaceBtn.click();
  }

  async clearAllFilter() {
    await this.filterBtn.click();
    await this.clearAllBtn.click();
  }
}
