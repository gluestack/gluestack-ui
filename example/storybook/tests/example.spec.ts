// @ts-nocheck
import { test, expect } from '@playwright/test';
const path = require('path');

const testData = require('./data.json');

for (const [key, value] of Object.entries(testData)) {
  const args = value.arguments;
  const overlay = value.overlay;
  if (!args || Object.keys(args).length === 0) {
    test(`${key} is displayed`, async ({ page }) => {
      const storybookUrl = path.join(
        'file://',
        __dirname,
        `../storybook-static/iframe.html?args=&id=stories-${value.storyParent}-${value.storyAddress}--${value.storyName}&viewMode=story`
      );
      await page.goto(storybookUrl);
      if (overlay) await page.waitForTimeout(300);
      expect(await page.screenshot()).toMatchSnapshot();
    });
  } else {
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
      )}`, async ({ page }) => {
        await page.goto(storybookUrl);
        if (overlay) await page.waitForTimeout(300);
        expect(await page.screenshot()).toMatchSnapshot();
      });

      let i = keys.length - 1;
      while (i >= 0) {
        const keyss = keys[i];
        const currentIndex = args[keyss].options.indexOf(combination[keyss]);

        if (currentIndex < args[keyss].options.length - 1) {
          combination[keyss] = args[keyss].options[currentIndex + 1];
          break;
        } else {
          combination[keyss] = args[keyss].options[0];
          i--;
        }
        if (i < 0) {
          done = true;
        }
      }
    }
  }
}
