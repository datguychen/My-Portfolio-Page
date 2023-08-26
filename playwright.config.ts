import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  snapshotPathTemplate:'../Utils/Screenshots/{platform}/{projectName}/{testFilePath}/{arg}{ext}',
  expect: {
    timeout: 20 * 1000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 5,
  reporter: [
  //   ['junit', { 
  //   outputFile: 'testmoresults/test-results.xml',
  //   embedAnnotationsAsProperties: true,

  //   // Not used by Testmo
  //   // embedAttachmentsAsProperty: undefined 
  // }],
    ['dot'],
    ['html'],
    ['line'],
  ],
  use: {
    launchOptions: {slowMo: 500},
    baseURL: "https://myportfoliopage-datguychen.vercel.app/",
    actionTimeout: 0,
    browserName : 'chromium', 
    headless : true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        viewport: { width: 1750, height: 900 },
      },
    },

    // {
    //   name: 'Safari',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['Desktop Safari'],
    //     viewport: { width: 1800, height: 900 },
    //   },
    // },

    // {
    //   name: 'ChromeWithMedia',
    //   use: {
    //     channel: 'chrome',
    //     viewport: { width: 1800, height: 900 },
    //   },
    // },

   /* {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
