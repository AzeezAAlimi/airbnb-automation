import { Locator, Page } from '@playwright/test';
import { Giftcards } from '../page/giftcards';
import { AirbnbYourHome } from '../page/airbnbYourHome';
import { HostAnExperience } from '../page/hostAnExperience';
import { HelpCenter } from '../page/helpCenter';

export class NavMenuBase {
  protected readonly page: Page;
  protected readonly menuContainer: Locator;
  protected readonly menuTrigger: Locator;

  // Shared locators
  private readonly giftCardBtn: Locator;
  private readonly airbnbYourHomeBtn: Locator;
  private readonly hostAnExperienceBtn: Locator;
  private readonly helpCenterBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuContainer = page.getByTestId('simple-header-profile-menu');
    this.menuTrigger = page.getByTestId('cypress-headernav-profile');

    // Initialize share locators
    this.giftCardBtn = this.menuContainer.getByRole('link', {
      name: 'Gift cards',
    });
    this.airbnbYourHomeBtn = this.menuContainer.getByRole('link', {
      name: 'Airbnb your home',
    });
    this.hostAnExperienceBtn = this.menuContainer.getByRole('link', {
      name: 'Host an experience',
    });
    this.helpCenterBtn = this.menuContainer.getByRole('link', {
      name: 'Help Center',
    });
  }

  // Base interaction method
  public async OpenMenu(): Promise<void> {
    if (!(await this.menuTrigger.isVisible())) {
      throw new Error('Menu trigger is not visible');
    }
    await this.menuTrigger.click();
    await this.menuContainer.waitFor({ state: 'visible' });
  }

  // Share navigation methods
  protected async navigateTo(menuItem: Locator): Promise<void> {
    await this.OpenMenu();
    await menuItem.click();
  }

  public async navigateToGiftCards(): Promise<Giftcards> {
    await this.navigateTo(this.giftCardBtn);
    await this.page.waitForURL('**/giftcards');
    return new Giftcards(this.page);
  }

  public async navigateToAirbnbYourHome(): Promise<AirbnbYourHome> {
    await this.navigateTo(this.airbnbYourHomeBtn);
    await this.page.waitForURL('**/host/homes');
    return new AirbnbYourHome(this.page);
  }

  public async navigateToHostExperience(): Promise<HostAnExperience> {
    await this.navigateTo(this.hostAnExperienceBtn);
    await this.page.waitForURL('**/host/experiences?from_nav=1');
    return new HostAnExperience(this.page);
  }

  public async navigateToHelpCenter(): Promise<HelpCenter> {
    await this.navigateTo(this.helpCenterBtn);
    await this.page.waitForURL('**/help');
    return new HelpCenter(this.page);
  }
}
