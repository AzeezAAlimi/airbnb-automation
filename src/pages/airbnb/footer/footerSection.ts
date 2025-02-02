import { Locator, type Page } from '@playwright/test';
import { Terms } from './common-components/terms.ts'
import { SiteMap } from './common-components/sitemap.ts';
import { Privacy } from './common-components/privacy.ts';
import { YourPrivacyChoices } from './common-components/yourPrivacyChoices.ts';
import { ChooseALanguage } from './common-components/selectALanguage.ts';
import { ChooseACurrency } from './common-components/selectACurrency.ts';
import { AirbnbFacebook } from './Common-components/airBnbFacebook.ts';
import { AirbnbX } from './common-components/airbnbX.ts';
import { AirbnbInstagram } from './common-components/airbnbInstagram.ts';

export class FooterSection {
  readonly page: Page;
  readonly footerTerms: Terms;
  readonly footerSiteMap: SiteMap;
  readonly footerPrivacy: Privacy;
  readonly footerYourPrivacyChoices: YourPrivacyChoices;
  readonly footerChooseALanguage: ChooseALanguage;
  readonly footerChooseACurrency: ChooseACurrency;
  readonly footerAirbnbFacebook: AirbnbFacebook;
  readonly footerAirbnbX: AirbnbX;
  readonly footerAirbnbInstagram: AirbnbInstagram;

  constructor(page: Page) {
    this.page = page;
    this.footerTerms = new Terms(page);
    this.footerSiteMap = new SiteMap(page);
    this.footerPrivacy = new Privacy(page);
    this.footerYourPrivacyChoices = new YourPrivacyChoices(page);
    this.footerChooseALanguage = new ChooseALanguage(page);
    this.footerChooseACurrency = new ChooseACurrency(page);
    this.footerAirbnbFacebook = new AirbnbFacebook(page);
    this.footerAirbnbX = new AirbnbX(page);
    this.footerAirbnbInstagram = new AirbnbInstagram(page);
  }
}
