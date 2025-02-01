import { test, expect } from '@playwright/test';

test('Airbnb website using the browser fixture', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airbnb.com/');
  console.log(await page.title());
});

test('Airbnb website using the page fixture', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  console.log(await page.title());
  await expect(page).toHaveTitle('Airbnb | Vacation rentals, cabins, beach houses, & more');
});

test('Login Airbnb', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
});

test('Search for cuba through Airbnb', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('header-tab-search-block-tab-STAYS').click();
  await page.getByTestId('structured-search-input-field-query').fill('cuba');
  await page.getByTestId('structured-search-input-field-query-panel').getByTestId('option-1').getByText('cuba').click();
  await page.getByTestId('structured-search-input-field-split-dates-0').click();
  await page.getByTestId('tab-list-wrapper').getByRole('tab', { name: 'Flexible' }).click();
  await page.getByTestId('carousel-chip').getByText('March').click();
  await page.getByTestId('structured-search-input-field-guests-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await page.getByTestId('structured-search-input-search-button').click();
  //console.log(await page.getByTestId('card-container').textContent())
  const cardTitle = await page.getByTestId('card-container');
  console.log(await cardTitle.nth(0).textContent());
  console.log(await cardTitle.nth(1).textContent());
  console.log(await cardTitle.nth(2).textContent());
  const allCardTitle = await cardTitle.allTextContents();
  console.log(allCardTitle);
});

test('Change language preferred language', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('cypress-headernav-profile').click();
  await page.getByRole('link', { name: 'Account' }).click();
  await page.getByRole('link', { name: 'Global preferences' }).click();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();

  const dropdown = page.locator("[id='native_currency']");
  await dropdown.selectOption('GBP');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await dropdown.selectOption('SEK');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('Click on the donation link', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airbnb.com/');
  const donationLink = page.getByRole('link', { name: 'Donate to help house families displaced by the LA wildfires' });
  const [newPage] = await Promise.all([context.waitForEvent('page'), donationLink.click()]);
  const text = await newPage.getByRole('heading', { name: 'Donate today' }).textContent();
  console.log(text);
});

test('Account settings: Click on each of the available such section', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('cypress-headernav-profile').click();
  await page.getByRole('link', { name: 'Account' }).click();
  await page.getByRole('link', { name: 'Personal info' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Payments & payouts' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Notifications' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Global preferences' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Professional hosting tools' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Login & security' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Taxes' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Privacy & sharing' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Travel for work' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Referral credit & coupon' }).click();
  await page.goBack();
});

test('Filter destination', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('category-bar-filter-button').click();
  await page.getByRole('radio', { name: 'Entire home' }).click();
  await expect(page.getByRole('radio', { name: 'Entire home' })).toBeChecked();
  await page.locator('[id="price_filter_min"]').fill('');
  await page.locator('[id="price_filter_min"]').fill('120');

  await page.locator('[id="price_filter_max"]').fill('');
  await page.locator('[id="price_filter_max"]').fill('4710');

  await page.getByTestId('stepper-filter-item-min_bedrooms-stepper-increase-button').click();
  await expect(page.getByTestId('stepper-filter-item-min_bedrooms-stepper-value')).toContainText('1+');

  await page.getByTestId('stepper-filter-item-min_beds-stepper-increase-button').click();
  await expect(page.getByTestId('stepper-filter-item-min_beds-stepper-value')).toContainText('1+');

  await page.getByTestId('stepper-filter-item-min_bathrooms-stepper-increase-button').click();
  await expect(page.getByTestId('stepper-filter-item-min_bathrooms-stepper-value')).toContainText('1+');

  await page.getByRole('button', { name: 'Show more' }).click();

  await page.getByRole('button', { name: 'Iron' }).click();
  await page.getByRole('button', { name: 'Heating' }).click();
  await page.getByRole('button', { name: 'Pool' }).click();
  await page.getByRole('button', { name: 'Beachfront' }).click();
  await page.getByRole('button', { name: 'Smoke alarm' }).click();
  await page.getByRole('button', { name: 'Instant Book' }).click();
  await page.getByRole('button', { name: 'Guest favorite' }).click();
  await page.getByRole('button', { name: 'Property type' }).click();
  await page.getByRole('button', { name: 'House', exact: true }).click();

  await page.getByRole('button', { name: 'Accessibility features' }).click();
  await page.getByRole('checkbox', { name: 'Step-free access' }).check();
  await expect(page.getByRole('checkbox', { name: 'Step-free access' })).toBeChecked();
  await page.getByRole('checkbox', { name: 'Step-free access' }).uncheck();
  await expect(page.getByText('Step-free access')).not.toBeChecked();
  await page.getByRole('button', { name: 'Clear all' }).click();

  await page.getByRole('button', { name: 'Clear all' });
});

test('Edit profile', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('cypress-headernav-profile').click();
  await page.getByRole('link', { name: 'Account' }).click();
  await page.getByRole('link', { name: 'Go to profile' }).click();
  await page.getByRole('button', { name: 'Create profile' }).click();

  await page.getByRole('button', { name: 'edit What do you do for work?' }).click();
  await page.getByRole('dialog').getByLabel('My work: ').click();
  await page.getByLabel('My work: ').fill('Engineer');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'My work: Engineer edit What' })).toContainText('Engineer');

  await page.getByRole('button', { name: 'edit Where have you always wanted to travel?' }).click();
  await page.getByRole('dialog').getByLabel("Where I've always wanted to go: ").click();
  await page.getByLabel("Where I've always wanted to go: ").fill('Nigeria');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: "Where I've always wanted to" })).toContainText('Nigeria');

  await page.getByRole('button', { name: 'edit What do you spend too much time doing?' }).click();
  await page.getByRole('dialog').getByLabel('I spend too much time: ').click();
  await page.getByLabel('I spend too much time: ').fill('watching youtube');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('button', { name: 'I spend too much time:' })).toContainText('watching youtube');

  await page.getByRole('button', { name: 'edit What was your favorite song in high school?' }).click();
  await page.getByRole('dialog').getByLabel('My favorite song in high school: ').click();
  await page.getByLabel('My favorite song in high school: ').fill('get down by nas');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('My favorite song in high school: get down by nas')).toContainText('get down by nas');

  await page.getByRole('button', { name: 'edit Decade you were born' }).click();
  await page.getByRole('dialog').getByRole('switch').click({ force: true });
  await expect(page.getByRole('switch')).toBeChecked();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Decade I was born: 80s')).toContainText('80s');

  await page.getByRole('button', { name: 'edit Languages you speak' }).click();
  await page.getByRole('dialog').getByPlaceholder('Search for a language').fill('English');
  await page.locator('[id="en-row-checkbox"]').click();
  await expect(page.locator('[id="en-row-checkbox"]')).toBeChecked();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Languages I speak: English', { exact: true })).toContainText('English');

  await page.getByRole('button', { name: 'edit Where you live' }).click();
  await page.getByRole('dialog').getByTestId('location-search').click();
  await page.getByTestId('location-search').fill('London , UK');
  // await page.getByText('London, UK').click();
  await page.getByRole('radio', { name: 'London' }).click();
  await expect(page.getByRole('radio', { name: 'London' })).toBeChecked();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Where I live: London, United Kingdom')).toContainText('London, United Kingdom');

  await page.getByRole('button', { name: 'Add intro' }).click();
  await page.getByRole('dialog').locator('textarea[rows="5"]').fill('hello');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('hello')).toContainText('hello');

  await page.getByRole('button', { name: 'Add interests' }).click();
  await page.getByRole('button', { name: 'Food' }).click();
  await page.getByRole('button', { name: 'Outdoors' }).click();
  await page.getByRole('button', { name: 'Live music' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Food')).toContainText('Food');
  await expect(page.getByText('Live music')).toContainText('Live music');
  await expect(page.getByText('Outdoors')).toContainText('Outdoors');

  await page.getByRole('button', { name: 'Done' }).nth(0).click({ force: true });

  await page.getByRole('button', { name: 'Edit profile' }).click();
  await page.getByRole('button', { name: 'My work: Engineer' }).click();
  await page.getByRole('dialog').getByLabel('My work: ').click();
  await page.getByLabel('My work: ').fill('');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('My work', { exact: true })).not.toContainText('Engineer');

  await page.getByRole('button', { name: "Where I've always wanted to go: Nigeria" }).click();
  await page.getByRole('dialog').getByLabel("Where I've always wanted to go: ").click();
  await page.getByLabel("Where I've always wanted to go: ").fill('');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText("Where I've always wanted to go", { exact: true })).not.toContainText('Nigeria');

  await page.getByRole('button', { name: 'I spend too much time: watching youtube' }).click();
  await page.getByRole('dialog').getByLabel('I spend too much time: ').click();
  await page.getByLabel('I spend too much time: ').fill('');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('I spend too much time', { exact: true })).not.toContainText('watching youtube');

  await page.getByRole('button', { name: 'My favorite song in high school: get down by nas' }).click();
  await page.getByRole('dialog').getByLabel('My favorite song in high school: ').click();
  await page.getByLabel('My favorite song in high school: ').fill('');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('My favorite song in high school', { exact: true })).not.toContainText('get down by nas');

  await page.getByRole('button', { name: 'Decade I was born: 80s' }).click();
  await page.getByRole('dialog').getByRole('switch').click({ force: true });
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('edit Decade you were born', { exact: true })).not.toContainText('80s');

  await page.getByRole('button', { name: 'Languages I speak: English' }).click();
  await page.getByRole('dialog').getByPlaceholder('Search for a language').fill('English');
  await page.locator('[id="en-row-checkbox"]').click();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('edit Languages you speak', { exact: true })).not.toContainText('English');

  await page.getByRole('button', { name: 'Where I live: London, United Kingdom' }).click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByRole('button', { name: 'edit Where you live' })).not.toContainText('London, United Kingdom');

  await page.getByRole('button', { name: 'Edit Intro' }).click();
  await page.getByRole('dialog').locator('textarea[rows="5"]').fill('');
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Write something fun and punchy.')).not.toContainText('hello');

  await page.getByRole('button', { name: 'Edit interests' }).click();
  await page.getByRole('button', { name: 'Food' }).click();
  await page.getByRole('button', { name: 'Outdoors' }).click();
  await page.getByRole('button', { name: 'Live music' }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'Save' }).click();
  await expect(
    page.getByText('Find common ground with other guests and Hosts by adding interests to your profile.'),
  ).toContainText('Find common');

  await page.getByRole('button', { name: 'Done' }).nth(0).click();
});

test('End to end Airbnb test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('header-tab-search-block-tab-EXPERIENCES').click();

  await page.getByTestId('structured-search-input-field-query').fill('havana, cuba');
  await page
    .getByTestId('structured-search-input-field-query-panel')
    .getByTestId('option-0')
    .getByText('Havana, Cuba')
    .click();
  await page.getByTestId('structured-search-input-field-dates-button').click();
  await page.getByTestId('structured-search-input-field-guests-button').click();
  await page.getByTestId('stepper-adults-increase-button').click();
  await expect(page.getByTestId('stepper-adults-a11y-value-label')).toContainText('1 Adults');
  await page.getByTestId('structured-search-input-search-button').click();

  const cubaExperience = page.getByRole('group', { name: 'Walking Tour, Welcome to Havana' });
  const [newPage] = await Promise.all([context.waitForEvent('page'), cubaExperience.click()]);
  await newPage.getByRole('button', { name: 'Close' }).click();
  await page.pause();
});

test('Screenshot & visual comparison', async ({ page }) => {
  await page.goto('https://www.airbnb.com/');
  await page.getByRole('button', { name: 'Main navigation menu' }).click();
  await page.getByTestId('cypress-headernav-login').click();
  await page.getByRole('dialog').getByTestId('social-auth-button-email').click();
  await page.getByTestId('email-login-email').fill('qaairbnb0@gmail.com');
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('email-signup-password').fill('test12345?');
  await page.getByTestId('signup-login-submit-btn').screenshot({ path: 'partialScreen.png' });
  await page.getByTestId('signup-login-submit-btn').click();
  await page.getByTestId('header-tab-search-block-tab-STAYS').click();
  await page.getByTestId('structured-search-input-field-query').fill('cuba');
  await page.screenshot({ path: 'screenshot.png' });
});

test('Visual testing', async ({ page }) => {
  await page.goto('https://www.google.com/');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});
