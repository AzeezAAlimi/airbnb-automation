import { type Page } from '@playwright/test';
import { FooterSection } from '../footerSection';

export class YourPrivacyChoicesPage {
  readonly page: Page;
  readonly footerSection: FooterSection;

  constructor(page: Page) {
    this.page = page;
    this.footerSection = new FooterSection(page);
  }
}
