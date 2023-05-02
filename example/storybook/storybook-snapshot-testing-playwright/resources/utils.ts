import { expect, Page, TestInfo } from '@playwright/test';
//import puppeteer from 'puppeteer';
//import { t } from 'testcafe';

export function baseURL() {
  let baseURLEnv: string;
  switch (process.env.ENV) {
    case 'docker':
      baseURLEnv = 'http://host.docker.internal:4400/?path=/story/stories-data-display-badge--badge';
      break;
    case 'stage':
      baseURLEnv = 'http://localhost:6007/?path=/story/stories-data-display-badge--badge'; //To set
      break;
    default:
      baseURLEnv = 'http://localhost:6007/?path=/story/stories-data-display-badge--badge';
      break;
  }
  return baseURLEnv;
}

// export function baseStorybookComponentURL() {
//   let baseStorybookComponentURLEnv: string;
//   switch (process.env.ENV) {
//     case "docker":
//       baseStorybookComponentURLEnv = "http://host.docker.internal:4400/?path=/story/stories-data-display-badge--badge";
//       break;
//     case "stage":
//       baseStorybookComponentURLEnv = "http://localhost:6007/?path=/story/stories-data-display-badge--badge"; //To set
//       break;
//     default:
//       baseStorybookComponentURLEnv = "http://localhost:6007/?path=/story/stories-data-display-badge--badge";
//       break;
//   }
//   return baseStorybookComponentURLEnv;
// }
// export async function takeElementScreenshot(selector: string) {
//   const path: string = `./screenshots/${selector}.png`;
// }

export async function expectToMatchSnapshot(
  page: Page,
  testInfo: TestInfo,
  component: string,
  story: string,
  i: number,
  name: string
) {
  if (testInfo.retry > 0 || testInfo.config.updateSnapshots === 'all') {
    await page.waitForTimeout(1000);
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot(
      `${component}-${story.split('--')[1]}-${name}-${i}.png`
    );
  }
  // below function will make use of puppeteer to take screenshot
  // export async function takeScreenshot() {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   const screenshot = await page.screenshot();
  //   // do something with the screenshot...
  //   await browser.close();
  // }

  // export async function attachScreenshotToReport() {
  //   const screenshot = await t.takeScreenshot();
  //   await t
  //   .switchToIframe('iframe[title="storybook-preview-iframe"]')
  //   .click('#root div')
  //   .switchToMainWindow()
  //   .click('#control-size')
  //   .click('#control-size option[value="sm"]')
  //   .switchToIframe('iframe[title="storybook-preview-iframe"]')
  //   .pressKey('ctr
  // l + c');
}
