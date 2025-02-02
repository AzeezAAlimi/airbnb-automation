import { expect, type Locator, type Page } from '@playwright/test';
import { GoToProfile } from './goToProfile';
import { GlobalPreferences } from './globalPreferences';
import { PersonalInfo } from './personalInfo';
import { LoginAndSecurity } from './loginAndSecurity';
import { PaymentsAndPayouts } from './paymentsAndPayouts';
import { Taxes } from './taxes';
import { Notifications } from '../notifications';
import { PrivacySndSharing } from './privacyAndSharing';
import { TravelForWork } from './travelForWork';
import { ProfessionalHostingTools } from './professionalHostingTools';
import { GuestReferrals } from './guestReferrals';

export class AccountSettings {
  private readonly page: Page;
  public readonly goToProfile: GoToProfile;
  public readonly personalInfo: PersonalInfo;
  public readonly loginAndSecurity: LoginAndSecurity;
  public readonly paymentsAndPayouts: PaymentsAndPayouts;
  public readonly taxes: Taxes;
  public readonly notifications: Notifications;
  public readonly privacyAndSharing: PrivacySndSharing;
  public readonly globalPreferences: GlobalPreferences;
  public readonly travelForWork: TravelForWork;
  public readonly professionalHostingTools: ProfessionalHostingTools;
  public readonly guestReferrals: GuestReferrals;

  constructor(page: Page) {
    this.page = page;
    this.goToProfile = new GoToProfile(page);
    this.personalInfo = new PersonalInfo(page);
    this.loginAndSecurity = new LoginAndSecurity(page);
    this.paymentsAndPayouts = new PaymentsAndPayouts(page);
    this.taxes = new Taxes(page);
    this.notifications = new Notifications(page);
    this.privacyAndSharing = new PrivacySndSharing(page);
    this.globalPreferences = new GlobalPreferences(page);
    this.travelForWork = new TravelForWork(page);
    this.professionalHostingTools = new ProfessionalHostingTools(page);
    this.guestReferrals = new GuestReferrals(page);
  }
}
