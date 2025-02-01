import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: '../tests',
  timeout: 45000,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    actionTimeout: 15000,
  },
  expect: {
    timeout: 10000,
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};
export default config;
