import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/airbnb',
  retries: 3,
  workers: 2,
  timeout: 30000, // for the overral test
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    actionTimeout: 15000,
    viewport: { width: 1920, height: 1080 },
    launchOptions: {
      args: ['--start-maximized'], // Maximize the browser window
    },
    geolocation: { longitude: -0.1278, latitude: 51.5074 },
    permissions: ['geolocation'],
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    video: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  expect: {
    timeout: 900000, // for assertions
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
};

export default config;
