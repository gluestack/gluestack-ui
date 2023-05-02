import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:6007/');
  await page.goto('http://localhost:6007/?path=/story/overview-introduction--page');
  await page.getByRole('link', { name: 'Storybook', exact: true }).click();
  await page.getByPlaceholder('Find components').click();
  await page
    .getByRole('navigation')
    .locator('div')
    .filter({ hasText: 'Skip to canvasStorybookSearch for components/OverviewIntroductionSkip to canvasA' })
    .nth(3)
    .click();
  await page.getByRole('button', { name: 'Data Display', exact: true }).click();
  await page.getByRole('button', { name: 'Layout', exact: true }).click();
  await page.getByRole('button', { name: 'Disclosure', exact: true }).click();
  await page.getByRole('button', { name: 'Feedback', exact: true }).dblclick();
  await page.getByRole('button', { name: 'Forms', exact: true }).click();
  await page.getByRole('link', { name: 'Button' }).click();
  await page.getByRole('button', { name: 'Feedback', exact: true }).click();
  await page.getByRole('link', { name: 'Button' }).click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .locator('.css-view-175oi2r > div > div > div')
    .first()
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .locator('.css-view-175oi2r > div > div > div > div > div > div > .css-view-175oi2r')
    .first()
    .click();
  await page.getByText('Storybook 7.0.7 is available!Your current version is: 6.5.16Skip to canvasStoryb').click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('heading', { name: 'Dependencies' })
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .locator('div')
    .filter({ hasText: 'title: gluestack-ui Button Component | Installation, Usage, and APIdescription: ' })
    .nth(1)
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .locator('div')
    .filter({ hasText: 'title: gluestack-ui Button Component | Installation, Usage, and APIdescription: ' })
    .nth(1)
    .click({
      button: 'right',
    });
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('heading', { name: 'Dependencies' })
    .click({
      button: 'right',
    });
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('body').press('Meta+k');
  await page.getByRole('button', { name: 'FEEDBACK', exact: true }).click();
  await page.getByRole('button', { name: 'DATA DISPLAY', exact: true }).click();
  await page.getByRole('button', { name: 'DISCLOSURE', exact: true }).click();
  await page.getByRole('button', { name: 'FORMS', exact: true }).click();
  await page.getByRole('button', { name: 'Button' }).click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('button', { name: 'Button text' })
    .click();
  await page.getByRole('link', { name: 'Button Loading' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').locator('body').click();
  await page.getByRole('link', { name: 'Button Sizes' }).click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('button', { name: 'Button' })
    .first()
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('button', { name: 'Button' })
    .nth(1)
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('button', { name: 'Button' })
    .nth(2)
    .click();
  await page
    .frameLocator('iframe[title="storybook-preview-iframe"]')
    .getByRole('button', { name: 'Button' })
    .nth(3)
    .click();
  await page.getByRole('link', { name: 'Button Styles' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByRole('button', { name: 'solid' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByRole('button', { name: 'outline' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByRole('button', { name: 'link' }).click();
  await page.getByRole('link', { name: 'Button With Icon' }).click();
  await page.getByRole('link', { name: 'Button Group' }).click();
  await page.frameLocator('iframe[title="storybook-preview-iframe"]').getByRole('button', { name: 'Button 3' }).click();
});
