// @ts-check
import { defineConfig, devices } from '@playwright/test';
require('dotenv').config()
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

  globalTimeout: 60000*60,
  timeout: 80000,
  expect: {
    timeout: 25000,
  },
  testDir: './tests',   /* We can change test directory whatever we want we can create and we can change 
  test directory we can use one directori at one time*/
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 3,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,/* based on the system configuration workers will work. 
  based on config 3,4,5,7 workers will work || we can define also.. */
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',/*html is the build in html reporter.. In playwright multiple reporters are there html, dot, line,blob,json,xml, */
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: { /*here we can use like.. if we have error getting where can it happen we can check through
     screenshot video line by line execution for debugging process.. */
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   // baseURL: ("https://www.flipkart.com"),/*We cabn use this option like if we work on only one url we can definr that url here..
    //  in script we can use like await page.goto(/); "('/')"  */
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    headless: false,
    // viewport: {
    //   width: 440 , height: 956,
    // },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
      // viewport: {
      // width: 440 , height: 956,
      // },
     },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

/*Based on the business requirements we need to change the configuration like reports,retries,workers,timeouts,global timeout,  */