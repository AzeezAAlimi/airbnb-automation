import { Locator, type Page } from '@playwright/test';
import { Terms } from './common-components/terms';
import { SiteMap } from './common-components/sitemap';
import { Privacy } from './common-components/privacy';
import { YourPrivacyChoices } from './common-components/yourPrivacyChoices';
import { ChooseALanguage } from './common-components/selectALanguage';
import { ChooseACurrency } from './common-components/selectACurrency';
import { AirbnbFacebook } from './Common-components/airBnbFacebook';
import { AirbnbX } from './common-components/airbnbX';
import { AirbnbInstagram } from './common-components/airbnbInstagram';

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
