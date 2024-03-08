import { test, expect } from '@playwright/test';
const path = require('path');

const testData = require('./data.json');

const envs = process.env;

for (const [key, value] of Object.entries(testData)) {
  if (envs.hasOwnProperty(key) || envs.emptyArgs) {
    const typeOfTest = envs[key];
    // total arguments for story
    const args = value.arguments;
    // flag whether overlay or not
    const overlay = value.overlay;
    if (typeOfTest === 'multiple') {
      // compound combination of all variants
      const keys = Object.keys(args);
      const combination = {};
      keys.forEach((variant) => {
        combination[variant] = args[variant].options[0];
      });
      let done = false;
      while (!done) {
        const storybookUrl = path.join(
          'file://',
          __dirname,
          `../storybook-static/iframe.html?args=${JSON.stringify(combination)
            .replace(/[{}"]/g, '')
            .replace(/[,]/g, ';')}&id=stories-${value.storyParent}-${
            value.storyAddress
          }--${value.storyName}`
        );
        test(`${key} is displayed with arguments ${JSON.stringify(
          combination
        )}`, async ({ page }, testinfo) => {
          await page.goto(storybookUrl);
          if (overlay) await page.waitForTimeout(300);
          testinfo.snapshotSuffix = 'darwin';
          expect(await page.screenshot()).toMatchSnapshot({
            maxDiffPixelRatio: 0.012,
          });
        });
        let i = keys.length - 1;
        while (i >= 0) {
          const variant = keys[i];
          const currentIndex = args[variant].options.indexOf(
            combination[variant]
          );
          if (currentIndex < args[variant].options.length - 1) {
            combination[variant] = args[variant].options[currentIndex + 1];
            break;
          } else {
            combination[variant] = args[variant].options[0];
            i--;
          }
          if (i < 0) {
            done = true;
          }
        }
      }
    }
    if (typeOfTest === 'single' || envs.emptyArgs) {
      // each variant individually
      const keys = Object.keys(args);
      const combination = {};
      keys.forEach((variant) => {
        combination[variant] = args[variant].options[0];
      });
      let flag = true;
      for (const variant in combination) {
        args[variant].options.forEach((variantOption, index) => {
          // condition to remove duplicate test cases
          if (flag || index !== 0) {
            combination[variant] = variantOption;
            const storybookUrl = path.join(
              'file://',
              __dirname,
              `../storybook-static/iframe.html?args=${JSON.stringify(
                combination
              )
                .replace(/[{}"]/g, '')
                .replace(/[,]/g, ';')}&id=stories-${value.storyParent}-${
                value.storyAddress
              }--${value.storyName}`
            );
            test(`${key} is displayed with arguments ${JSON.stringify(
              combination
            )}`, async ({ page }, testinfo) => {
              await page.goto(storybookUrl);
              if (overlay) await page.waitForTimeout(300);
              testinfo.snapshotSuffix = 'darwin';
              expect(await page.screenshot()).toMatchSnapshot({
                maxDiffPixelRatio: 0.012,
              });
            });
          }
        });
        flag = false;
      }
    }
    if (typeOfTest === 'default' || envs.emptyArgs) {
      // case: typeOfTest === 'default'
      // no args are passed, basic story will run
      test(`${key} is displayed`, async ({ page }, testinfo) => {
        const storybookUrl = path.join(
          'file://',
          __dirname,
          `../storybook-static/iframe.html?args=&id=stories-${value.storyParent}-${value.storyAddress}--${value.storyName}&viewMode=story`
        );
        await page.goto(storybookUrl);
        if (overlay) await page.waitForTimeout(300);
        testinfo.snapshotSuffix = 'darwin';
        expect(await page.screenshot()).toMatchSnapshot({
          maxDiffPixelRatio: 0.011,
        });
      });
    }
    // if (!args || Object.keys(args).length === 0) {
    // test(`${key} is displayed`, async ({ page }) => {
    //   const storybookUrl = path.join(
    //     'file://',
    //     __dirname,
    //     `../storybook-static/iframe.html?args=&id=stories-${value.storyParent}-${value.storyAddress}--${value.storyName}&viewMode=story`
    //   );
    //   await page.goto(storybookUrl);
    //   if (overlay) await page.waitForTimeout(300);
    //   expect(await page.screenshot()).toMatchSnapshot();
    // });
    // } else {
    // const keys = Object.keys(args);
    // const combination = {};
    // keys.forEach((variant) => {
    //   combination[variant] = args[variant].options[0];
    // });
    // let done = false;
    // while (!done) {
    //   const storybookUrl = path.join(
    //     'file://',
    //     __dirname,
    //     `../storybook-static/iframe.html?args=${JSON.stringify(combination)
    //       .replace(/[{}"]/g, '')
    //       .replace(/[,]/g, ';')}&id=stories-${value.storyParent}-${
    //       value.storyAddress
    //     }--${value.storyName}`
    //   );
    //   test(`${key} is displayed with arguments ${JSON.stringify(
    //     combination
    //   )}`, async ({ page }) => {
    //     await page.goto(storybookUrl);
    //     if (overlay) await page.waitForTimeout(300);
    //     expect(await page.screenshot()).toMatchSnapshot();
    //   });
    //   let i = keys.length - 1;
    //   while (i >= 0) {
    //     const variant = keys[i];
    //     const currentIndex = args[variant].options.indexOf(combination[variant]);
    //     if (currentIndex < args[variant].options.length - 1) {
    //       combination[variant] = args[variant].options[currentIndex + 1];
    //       break;
    //     } else {
    //       combination[variant] = args[variant].options[0];
    //       i--;
    //     }
    //     if (i < 0) {
    //       done = true;
    //     }
    //   }
    // }
    // }
  }
}
