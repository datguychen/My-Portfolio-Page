import { defineConfig, devices } from '@playwright/test';

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
    ['junit', { 
    outputFile: 'testmoresults/test-results.xml',
    embedAnnotationsAsProperties: true,
  }],
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
      name: 'Chrome_With_Media',
      testDir: './tests',
      use: {
        launchOptions: { slowMo: 500 },
        actionTimeout: 0,
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome'],
        viewport: { width: 1750, height: 900 },
        channel: 'chrome',
      },
    },
  ],
});
