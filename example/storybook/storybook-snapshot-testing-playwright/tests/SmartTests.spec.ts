import { test } from '@playwright/test';
import { expectToMatchSnapshot } from '../resources/utils';
import componentList from '../resources/componentList.json';

const iFrameUrl = '/iframe.html?id=';

for (const [component, stories] of Object.entries(componentList)) {
  test.describe(`Smart tests for component: ${component}`, () => {
    for (const story of stories as string) {
      test(`Smart test for story: ${story.split('--')[1]}`, async ({
        page,
        baseURL,
        isMobile,
        browserName,
      }, testInfo) => {
        test.skip(story.includes('mobile') && !isMobile);

        await page.goto(baseURL + iFrameUrl + story);
        await expectToMatchSnapshot(page, testInfo, component, story, 0, 'base');

        page.on('filechooser', async (fileChooser) => {
          await fileChooser.setFiles('resources/image1.jpg');
        });

        //TOOLTIP
        const tooltipLocator = page.locator('#root >> //*[@data-tooltipped]');
        const tooltipCount = await tooltipLocator.count();
        for (let i = 0; i < tooltipCount; ++i) {
          await tooltipLocator.nth(i).hover();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'tooltip');
        }
        //BUTTON
        const buttonLocator = page.locator('#root >> //button[@type="button" and not(@disabled)]');
        const buttonCount = await buttonLocator.count();
        for (let i = 0; i < buttonCount; ++i) {
          await buttonLocator.nth(i).hover();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'button-hover');
          await buttonLocator.nth(i).click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'button-click');
        }
        //ELEMENT WITH ONCLICK
        const onClickLocator = page.locator('#root >> //*[contains(@data-testid, "onclick")]');
        const onClickCount = await onClickLocator.count();
        const isTimeoutNeeded = await page.locator(
          '#root >> //*[@data-testid="ebk-carousel" or @data-testid="ebk-gallery"]'
        );
        for (let i = 0; i < onClickCount; ++i) {
          const cursor = await onClickLocator.nth(i).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('cursor');
          });
          if (cursor !== 'not-allowed') {
            await onClickLocator.nth(i).click();
            if (isTimeoutNeeded) await page.waitForTimeout(2000);
            await expectToMatchSnapshot(page, testInfo, component, story, i, 'onClick-click');
          }
        }
        //INPUT TEXT
        const inputLocator = page.locator(
          '#root >> //input[@type="text" and not(@disabled or @readonly or @role="combobox")]'
        );
        const inputCount = await inputLocator.count();
        for (let i = 0; i < inputCount; ++i) {
          await inputLocator.nth(i).hover();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'input-hover');
          await inputLocator.nth(i).click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'input-click');
          await inputLocator.nth(i).fill('Toto');
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'input-fill');
        }
        //TOGGLE
        const toggleLocator = page.locator('#root >> //input[@type="checkbox" and not(@disabled)]/parent::*');
        const toggleCount = await toggleLocator.count();
        for (let i = 0; i < toggleCount; ++i) {
          await toggleLocator.nth(i).hover();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'toggle-hover');
          await toggleLocator.nth(i).click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'toggle-click');
        }
        //RADIO BUTTON
        const radioLocator = page.locator('#root >> //input[@type="radio" and not(@disabled)]/parent::*');
        const radioCount = await radioLocator.count();
        for (let i = 0; i < radioCount; ++i) {
          await radioLocator.nth(i).hover();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'radio-hover');
          await radioLocator.nth(i).click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'radio-click');
        }
        //UPLOAD FILE
        const inputFileLocator = page.locator('#root >> //input[@type="file" and not(@disabled)]');
        const inputFileCount = await inputFileLocator.count();
        for (let i = 0; i < inputFileCount; ++i) {
          await inputFileLocator.setInputFiles('resources/image1.jpg');
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'inputFile-setfile');
        }
        //SELECT
        let selectLocator;
        if (browserName === 'webkit')
          selectLocator = page.locator(
            '#root >> //input[@type="text" and @role="combobox" and not(@disabled)]/parent::*'
          );
        else selectLocator = page.locator('#root >> //input[@type="text" and @role="combobox" and not(@disabled)]');
        const selectCount = await selectLocator.count();
        for (let i = 0; i < selectCount; ++i) {
          await selectLocator.click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'select-click');
          await selectLocator.press('ArrowDown');
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'select-option');
          await selectLocator.press('Enter');
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'select-option-selected');
        }
        //CLICK TO FULLSCREEN
        const fullscreenLocator = page.locator(
          '#root >> //*[contains(@data-testid, "fullscreen")]/parent::*[contains(@class, "active")]'
        );
        const fullscreenCount = await fullscreenLocator.count();
        for (let i = 0; i < fullscreenCount; ++i) {
          await fullscreenLocator.click();
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'fullscreen-click');
          await fullscreenLocator.press('Escape');
          await expectToMatchSnapshot(page, testInfo, component, story, i, 'fullscreen-escape');
        }
      });
    }
  });
}
