import { Locator, type Page } from '@playwright/test';
import { Terms } from './Common-components/terms';
import { SiteMap } from './Common-components/sitemap';
import { Privacy } from './Common-components/privacy';
import { YourPrivacyChoices } from './Common-components/yourPrivacyChoices';
import { ChooseALanguage } from './Common-components/selectALanguage';
import { ChooseACurrency } from './Common-components/selectACurrency';
import { AirbnbFacebook } from './Common-components/airbnbFacebook';
import { AirbnbX } from './Common-components/airbnbX';
import { AirbnbInstagram } from './Common-components/airbnbInstagram';

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
