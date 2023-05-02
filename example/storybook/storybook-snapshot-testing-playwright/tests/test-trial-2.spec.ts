import { test } from '@playwright/test';
//import { takeElementScreenshot } from '../resources/utils';

test('test', async ({ page }) => {
  await page.goto('http://localhost:6007/?path=/story/overview-introduction--page');
  await page.getByRole('button', { name: 'DATA DISPLAY', exact: true }).click();
  await page.getByRole('link', { name: 'Badge' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(1).click();
  await page.locator('#control-variant').selectOption('outline');
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(2).click();
  await page.locator('#control-action').selectOption('success');
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(3).click();
  await page.locator('#control-size').selectOption('sm');
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .locator('body')
    .screenshot({ path: 'screenshots/screenshot.png' });
});
