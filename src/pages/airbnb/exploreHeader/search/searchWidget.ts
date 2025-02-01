import { expect, type Locator, type Page } from '@playwright/test';
import { AbstractComponent } from '../../abstractComponent';

export class SearchWidget extends AbstractComponent {
  public isDisplayed(): boolean {
    return false;
  }
}
