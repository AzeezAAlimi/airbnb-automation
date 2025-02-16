import { Locator, Page, expect } from '@playwright/test';
import { NavMenuBase } from '../shared/navMenuBase';
import { AccountSettings } from '../page/Account/accountSettings';
import { Messages } from '../page/messages';
import { Wishlists } from '../page/wishlists';
import { Trips } from '../page/trips';
import { Notifications } from '../page/notifications';

export class NavMenuBtnLoggedin extends NavMenuBase {
  // Locators
  private readonly messageBtn: Locator;
  private readonly notificationBtn: Locator;
  private readonly tripsBtn: Locator;
  private readonly wishlistBtn: Locator;
  private readonly accountBtn: Locator;
  private readonly logoutBtn: Locator;

  constructor(page: Page) {
    super(page);

    // Initialize locators
    this.messageBtn = page.getByRole('link', { name: 'Messages' });
    this.notificationBtn = page.getByRole('link', { name: 'Notifications' });
    this.tripsBtn = page.getByRole('link', { name: 'Trips' });
    this.wishlistBtn = page.getByRole('link', { name: 'Wishlists' });
    this.accountBtn = page.getByRole('link', { name: 'Account' });
    this.logoutBtn = page.getByTestId('cypress-headernav-logout-soa');
  }

  public async navigateToMessage(): Promise<Messages> {
    await this.navigateTo(this.messageBtn);
    await this.page.waitForURL('**/messages');
    return new Messages(this.page);
  }

  public async navigateToNotification(): Promise<Notifications> {
    await this.navigateTo(this.notificationBtn);
    await this.page.waitForURL('**/notifications');
    return new Notifications(this.page);
  }

  public async navigateToTrips(): Promise<Trips> {
    await this.navigateTo(this.tripsBtn);
    await this.page.waitForURL('**/trips/v1');
    return new Trips(this.page);
  }

  public async navigateToWishlist(): Promise<Wishlists> {
    await this.navigateTo(this.wishlistBtn);
    await this.page.waitForURL('**/wishlists');
    return new Wishlists(this.page);
  }

  public async navigateToAccount(): Promise<AccountSettings> {
    await this.navigateTo(this.accountBtn);
    await this.page.waitForURL('**/account-settings');
    return new AccountSettings(this.page);
  }

  public async navigateToLogout(): Promise<void> {
    return this.navigateTo(this.logoutBtn);
    await expect(this.page).toHaveURL(
      'https://www.airbnb.com/?has_logged_out=1',
    );
  }
}
