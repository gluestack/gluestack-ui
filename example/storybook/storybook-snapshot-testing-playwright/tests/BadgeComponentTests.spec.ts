import { test, expect } from '@playwright/test';

//Headless mode as requested
test.describe('BadgeComponent Tests', () => {
  test('Check BadgeComponent visibility and perform a snapshot comparison', async ({ page, baseURL }) => {
    //Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility.
    const buffer = await page.screenshot();
    // eslint-disable-next-line no-console
    console.log(buffer.toString('base64'));

    //Open directly opening the story component rather than opening the storybook base url and then navigating to the component
    await page.goto(baseURL as string);

    //Verifying the visibility of the component
    await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(3).isVisible();

    //If the snapshot doesn't exists inside the 'screenshots' folder with as 'nameOfTheComponent.png', It will It will capture a new one.
    await expect(
      page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(3)
    ).toHaveScreenshot();

    await page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .locator('#root div')
      .nth(3)
      .screenshot({ path: 'screenshots/BadgeComponent.png' });

    // });

    test('Check BadgeComponent visibility after making changes using controls and perform a snapshot comparison', async ({
      page,
      baseURL,
    }) => {
      //Open directly opening the story component rather than opening the storybook base url and then navigating to the component
      await page.goto(baseURL as string);

      //Verifying the visibility of the component and clicking on it to change the component property
      await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(1).click();

      //selecting the variant of the component from the control panel
      await page.locator('#control-variant').selectOption('outline');

      //below property will change the components color to green
      await page.locator('#control-action').selectOption('success');

      //below property will change the components sizer to small
      await page.locator('#control-size').selectOption('sm');

      //changing the component property again to check if the snapshot comparison fails (comment/uncomment the below line to check the result))
      //below action will change the color to red
      await page.locator('#control-action').selectOption('error');
      //also make the border as solid
      await page.locator('#control-variant').selectOption('solid');

      //If the snapshot doesn't exists inside the 'screenshots' folder with as 'nameOfTheComponent.png', It will It will capture a new one.
      await expect(
        page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('#root div').nth(3)
      ).toHaveScreenshot('BadgeComponent.png');
    });
  });
});
