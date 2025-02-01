import { expect, type Page } from '@playwright/test'; // Import Page which comes from playwright representing a browser page
import { FooterSection } from './footer/footerSection'; // Import the Footersection class
import { HeaderSection } from './exploreHeader/headerSection'; // Import the Headersection class

// HomePage class
// Class is a blueprint for creating objects that defines properties and methods the objects will have
export class HomePage {
  // Properties : variables inside the class
  // Variable is used to store data
  private readonly page: Page;
  // A reference to the playwright browser page for navigating and interacting with the site
  public readonly header: HeaderSection;
  // An instance of the HeaderSection class, this is used to interact with the headersection part of the homepage
  public readonly footer: FooterSection;
  // An instance of the FooterSection class, this is used to interact with the footer part of the homepage

  constructor(page: Page) {
    // The contructor is a special method in a class
    // It is used to initialize the objects properties
    this.page = page;
    // Stores the Page object in the page property
    this.header = new HeaderSection(page);
    // Creates instances of HeaderSection to make header functionality avaible for the homepage
    this.footer = new FooterSection(page);
    // Creates instances of FooterSection to make footer functionality avaible for the homepage
  }
}
