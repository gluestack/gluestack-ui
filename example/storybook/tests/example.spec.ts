// import { test, expect } from '@playwright/test';

// test('has text', async ({ page }) => {
//   await page.goto(
//     // 'http://localhost:6007/iframe.html?args=action:primary;variant:soild&id=stories-forms-button--button&viewMode=story',
//     // 'http://localhost:6007/iframe.html?args=action:primary;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:primary;variant:link&id=stories-forms-button--button&viewMode=story'

//     // 'http://localhost:6007/iframe.html?args=action:secondary;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:secondary;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:secondary;variant:outline&id=stories-forms-button--button&viewMode=story'

//     // 'http://localhost:6007/iframe.html?args=action:positive;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:positive;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:positive;variant:outline&id=stories-forms-button--button&viewMode=story'

//     // 'http://localhost:6007/iframe.html?args=action:negative;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:negative;variant:outline&id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?args=action:negative;variant:outline&id=stories-forms-button--button&viewMode=story'

//     // 'http://localhost:6007/iframe.html?id=stories-forms-button--button&viewMode=story'
//     // 'http://localhost:6007/iframe.html?id=stories-forms-checkbox--checkbox&viewMode=story'

//   );
//   await page.getByText('Label 1');
//   expect(await page.screenshot()).toMatchSnapshot();
//   await page.getByText('Label 1').click();
//   await page.getByText('Label 1').hover();

// });

// // test('has text', async ({ page }) => {
// //   await page.goto(
// //     'http://localhost:6007/iframe.html?args=action:primary;variant:outline&id=stories-forms-button--button&viewMode=story'
// //     // 'http://localhost:6007/iframe.html?id=stories-forms-button--button&viewMode=story'
// //     // 'http://localhost:6007/iframe.html?id=stories-forms-checkbox--checkbox&viewMode=story'
// //   );
// //   expect(await page.screenshot()).toMatchSnapshot();
// // });

const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Load the login page
  await page.goto(
    'example/storybook/src/ui/components/Forms/Button/Button.stories.tsx'
  );

  // Locate the email, password, and login button elements using selectors
  const btn = 'input[type"button"]';

  // Fill in the login form
  // await page.fill(emailInputSelector, 'your-email@example.com');
  await page.click(btn);
  // console.log('button clicked ');

  // Click the login button

  // Wait for a navigation or any other condition indicating successful login

  // Perform additional actions after successful login if needed

  // Close the browser
  await browser.close();
})();
