import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { YourPrivacyChoicesPage } from '../../../../pages/airbnb/footer/pages/yourPrivacyChoicesPage';
import { loadHomePage } from '../../../../utilities/helper';

let homePage: HomePage;
let yourPrivacyChoicesPage: YourPrivacyChoicesPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  yourPrivacyChoicesPage = new YourPrivacyChoicesPage(page);
  await loadHomePage(page);
});

test.describe('Privacypage footer link test', () => {
  test('Terms and condition links tests', async ({}) => {
    await yourPrivacyChoicesPage.footerSection.footerTerms.clickonTerms();
    await yourPrivacyChoicesPage.footerSection.footerSiteMap.clickonSiteMap();
    await yourPrivacyChoicesPage.footerSection.footerPrivacy.clickonPrivacy();
    await yourPrivacyChoicesPage.footerSection.footerYourPrivacyChoices.clickonYourPrivacyChoices();
  });

  test('Currency and Language test', async ({}) => {
    await yourPrivacyChoicesPage.footerSection.footerChooseACurrency.clickonCroatianKunaBtn();
    await yourPrivacyChoicesPage.footerSection.footerChooseALanguage.clickonDeutschLanguage();
  });

  test('Social media links tests', async ({}) => {
    await yourPrivacyChoicesPage.footerSection.footerAirbnbFacebook.clickonFacebookBtn();
    await yourPrivacyChoicesPage.footerSection.footerAirbnbInstagram.clickonInstagramBtn();
    await yourPrivacyChoicesPage.footerSection.footerAirbnbX.clickonXBtn();
  });
});
