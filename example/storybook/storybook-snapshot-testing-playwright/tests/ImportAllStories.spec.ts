import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

test.describe('Get a list of all stories', () => {
  test('Get a list of all stories', async ({ page, baseURL }) => {
    await page.goto(baseURL as string);
    await page.click('#storybook-explorer-tree >> #components >> //*[name()="svg"]');

    //const componentList: Record<string, string[]> = {};
    const componentList = {};
    const components = await page
      .locator('#storybook-explorer-tree >> //*[@data-nodetype="component"]')
      .allTextContents();

    await Promise.all(
      components.map(async (component) => {
        const dataItemId = await page
          .locator(`#storybook-explorer-tree >> //*[@data-nodetype="component" and text()="${component}"]`)
          .getAttribute('data-item-id');
        const stories = page.locator(
          `#storybook-explorer-tree >> //*[@data-nodetype="story" and @data-parent-id="${dataItemId}"]`
        );

        const elements = await stories.all();
        const itemList = await Promise.all(
          elements.map(async (element) => {
            const item = element.getAttribute('data-item-id');
            return item ?? '';
          })
        );
        componentList[component] = itemList.filter((item) => typeof item === 'string');
      })
    );

    const resourcesDirPath = path.join(process.cwd(), 'resources');
    const componentListPath = path.join(resourcesDirPath, 'componentList.json');

    if (!fs.existsSync(resourcesDirPath)) {
      await mkdirAsync(resourcesDirPath);
    }

    await writeFileAsync(componentListPath, JSON.stringify(componentList));
  });
});
