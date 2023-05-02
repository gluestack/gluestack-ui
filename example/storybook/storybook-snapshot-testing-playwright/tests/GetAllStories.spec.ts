import { test } from '@playwright/test';
import fs from 'fs';

test.describe('Get a list of all stories', () => {
  test('Get a list of all stories', async ({ page, baseURL }) => {
    await page.goto(baseURL);
    await page.click('#storybook-explorer-tree >> #components >> //*[name()="svg"]');
    const componentList = {};

    const components = await page
      .locator('#storybook-explorer-tree >> //*[@data-nodetype="component"]')
      .allTextContents();
    for (const component of components) {
      componentList[component] = [];

      const dataItemId = await page
        .locator(`#storybook-explorer-tree >> //*[@data-nodetype="component" and text()="${component}"]`)
        .getAttribute('data-item-id');
      const stories = page.locator(
        `#storybook-explorer-tree >> //*[@data-nodetype="story" and @data-parent-id="${dataItemId}"]`
      );
      const count = await stories.count();

      for (let i = 0; i < count; ++i) {
        componentList[component].push(await stories.nth(i).getAttribute('data-item-id'));
      }
    }
    const pathForpageList = `resources`;
    !fs.existsSync(pathForpageList) &&
      fs.mkdir(`resources`, (err) => {
        if (err) throw err;
      });
    fs.writeFile(`resources/componentList.json`, JSON.stringify(componentList), function (err) {
      if (err) throw err;
    });
  });
});
