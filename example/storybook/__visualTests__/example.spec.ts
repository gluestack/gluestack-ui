import { test, expect } from '@playwright/test';

test('has box', async ({ page }) => {
  // await page.goto('http://localhost:6007/?path=/story/stories-layout-box--box');
  await page.goto(
    'http://localhost:6007/iframe.html?args=&id=stories-layout-box--box&viewMode=story'
  );
  expect(await page.screenshot()).toMatchSnapshot();

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
