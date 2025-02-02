import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { loadHomePage } from '../../../../utilities/helper';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await loadHomePage(page);
});

test.describe('Homepage footer test', () => {
  test('Terms and condition links tests', async ({}) => {
    await homePage.footer.footerTerms.clickonTerms();
    await homePage.footer.footerSiteMap.clickonSiteMap();
    await homePage.footer.footerPrivacy.clickonPrivacy();
    await homePage.footer.footerYourPrivacyChoices.clickonYourPrivacyChoices();
  });

  test('Change the homepage language from the footer to Dansk', async ({}) => {
    await homePage.footer.footerChooseALanguage.clickonDanskLanguage();
  });

  test('Change the homepage language from the footer to Deutsch', async ({}) => {
    await homePage.footer.footerChooseALanguage.clickonDeutschLanguage();
  });

  test('Social media links tests', async ({}) => {
    await homePage.footer.footerAirbnbFacebook.clickonFacebookBtn();
    await homePage.footer.footerAirbnbX.clickonXBtn();
    await homePage.footer.footerAirbnbInstagram.clickonInstagramBtn();
  });

  test('Chnage the homepage currency from the footer to EUR', async ({}) => {
    await homePage.footer.footerChooseACurrency.clickonEuroEurBtn();
  });

  test('Chnage the homepage currency from the footer to KUNA', async ({}) => {
    await homePage.footer.footerChooseACurrency.clickonCroatianKunaBtn();
  });
});
