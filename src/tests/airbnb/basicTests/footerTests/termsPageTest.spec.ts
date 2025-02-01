import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { TermsPage } from '../../../../pages/airbnb/footer/pages/termsPage';
import { loadHomePage } from '../../../../utilities/helper';

let homePage: HomePage;
let termsPage: TermsPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  termsPage = new TermsPage(page);
  await loadHomePage(page);
});

test.describe('Termspage footer link test', () => {
  test('Terms and condition links tests', async ({}) => {
    await termsPage.footerSection.footerTerms.clickonTerms();
    await termsPage.footerSection.footerSiteMap.clickonSiteMap();
    await termsPage.footerSection.footerPrivacy.clickonPrivacy();
    await termsPage.footerSection.footerYourPrivacyChoices.clickonYourPrivacyChoices();
  });

  test('Currency and Language test', async ({}) => {
    await termsPage.footerSection.footerChooseACurrency.clickonCroatianKunaBtn();
    await termsPage.footerSection.footerChooseALanguage.clickonDeutschLanguage();
  });

  test('Social media links tests', async ({}) => {
    await termsPage.footerSection.footerAirbnbFacebook.clickonFacebookBtn();
    await termsPage.footerSection.footerAirbnbInstagram.clickonInstagramBtn();
    await termsPage.footerSection.footerAirbnbX.clickonXBtn();
  });
});
