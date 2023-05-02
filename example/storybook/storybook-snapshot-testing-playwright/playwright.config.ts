import { PlaywrightTestConfig, devices } from '@playwright/test';
import { baseURL } from './resources/utils';

const baseUrl = baseURL();

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  outputDir: 'out/test-results',
  workers: undefined,
  timeout: 60 * 1000,
  use: {
    ignoreHTTPSErrors: true,
    video: {
      mode: 'on',
      size: { width: 800, height: 800 },
    },
    baseURL: baseUrl,
    trace: 'on',
    launchOptions: {
      slowMo: 1 * 1000,
    },
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },
  retries: 1,
  maxFailures: process.env.CI === 'true' ? 20 : undefined,
  updateSnapshots: 'all',
  expect: {
    toMatchSnapshot: {
      maxDiffPixels: 5,
    },
  },
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'safari',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    // {
    //   name: 'iPhone 13 Pro',
    //   use: {
    //     ...devices['iPhone 13 Pro'],
    //   },
    // },
    // {
    //   name: 'Pixel 5',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
  ],
  reporter: [
    ['html', { outputFolder: 'out/report', open: 'always' }],
    ['dot'],
    ['junit', { outputFile: 'out/report/report.xml' }],
    ['json', { outputFile: 'out/report/report.json' }],
  ],
};
export default config;
