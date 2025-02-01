import { expect, type Locator, type Page } from '@playwright/test';

export abstract class AbstractComponent {
  public abstract isDisplayed(): boolean;
}
