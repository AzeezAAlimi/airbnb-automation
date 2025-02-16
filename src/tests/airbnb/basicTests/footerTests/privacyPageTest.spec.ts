import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { PrivacyPage } from '../../../../pages/airbnb/footer/pages/privacyPage';
import { loadHomePage } from '../../../../utilities/helper';

let homePage: HomePage;
let privacyPage: PrivacyPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  privacyPage = new PrivacyPage(page);
  await loadHomePage(page);
});

test.describe('Privacypage footer link test', () => {
  test('Terms and condition links tests', async ({}) => {
    await privacyPage.footerSection.footerTerms.clickonTerms();
    await privacyPage.footerSection.footerSiteMap.clickonSiteMap();
    await privacyPage.footerSection.footerPrivacy.clickonPrivacy();
    await privacyPage.footerSection.footerYourPrivacyChoices.clickonYourPrivacyChoices();
  });

  test('Currency and Language test', async ({}) => {
    await privacyPage.footerSection.footerChooseACurrency
      .clickonCroatianKunaBtn;
    await privacyPage.footerSection.footerChooseALanguage.clickonDeutschLanguage();
  });

  test('Social media links tests', async ({}) => {
    await privacyPage.footerSection.footerAirbnbFacebook.clickonFacebookBtn();
    await privacyPage.footerSection.footerAirbnbInstagram.clickonInstagramBtn();
    await privacyPage.footerSection.footerAirbnbX.clickonXBtn();
  });
});
