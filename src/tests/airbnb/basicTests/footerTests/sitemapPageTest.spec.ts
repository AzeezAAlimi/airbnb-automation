import { test, expect } from '@playwright/test';
import { HomePage } from '../../../../pages/airbnb/homePage';
import { TermsPage } from '../../../../pages/airbnb/footer/pages/termsPage';
import { SitemapPage } from '../../../../pages/airbnb/footer/pages/sitemapPage';
import { loadHomePage } from '../../../../utilities/helper';

let homePage: HomePage;
let sitemapPage: SitemapPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  sitemapPage = new SitemapPage(page);
  await loadHomePage(page);
});

test.describe('SitemapPage footer link test', () => {
  test('Terms and condition links tests', async ({}) => {
    await sitemapPage.footerSection.footerTerms.clickonTerms();
    await sitemapPage.footerSection.footerSiteMap.clickonSiteMap();
    await sitemapPage.footerSection.footerPrivacy.clickonPrivacy();
  });

  test('Social media links tests', async ({}) => {
    await sitemapPage.footerSection.footerAirbnbFacebook.clickonFacebookBtn();
    await sitemapPage.footerSection.footerAirbnbInstagram.clickonInstagramBtn();
    await sitemapPage.footerSection.footerAirbnbX.clickonXBtn();
  });
});
