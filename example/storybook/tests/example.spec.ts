import { test, expect } from '@playwright/test';
const path = require('path');

const pathNew = [
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-typography-heading--heading'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-media-and-icons-image--image'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-checkbox--checkbox'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-media-and-icons-icons--icon'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-layout-box--box'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-layout-center--center'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-layout-vstack--v-stack'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-layout-hstack--h-stack'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-button--button'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-slider--slider'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-feedback-progress--progress'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-feedback-toast--toast'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-feedback-alert--alert'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-data-display-badge--badge'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-data-display-divider--divider'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-others-fab--fab'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-formcontrol--form-control'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-input--input'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-link--link'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-pressable--pressable'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-radio--radio'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-switch--switch'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-textarea--textarea'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-overlay-alertdialog--alert-dialog'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-overlay-menu--menu'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-overlay-popover--popover'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-overlay-modal--modal'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-overlay-tooltip--tooltip'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-disclosure-accordion--accordion'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-forms-select--select'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-media-and-icons-avatar--avatar'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-feedback-spinner--spinner'
  ),
  path.join(
    __dirname,
    '../storybook-static/iframe.html?args=&id=stories-typography-text--text'
  ),
];

test('Heading is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[0]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Image is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[1]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Checkbox is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[2]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Icon is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[3]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Box is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[4]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Center is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[5]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Vstack is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[6]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});

test('Hstack is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[7]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Button is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[8]}`);
  expect(await page.screenshot()).toMatchSnapshot();
  expect(await page.getByRole('button').click());
});
test('Slider is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[9]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Progress is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[10]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Toast is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[11]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Alert is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[12]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Badge is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[13]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Divider is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[14]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Fab is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[15]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('FormControl is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[16]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Input is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[17]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Link is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[18]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Pressable is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[19]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Radio is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[20]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Switch is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[21]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Textarea is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[22]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Alert Dialog is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[23]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Menu is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[24]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Popover is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[25]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Modal is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[26]}`);
  expect(await page.screenshot()).toMatchSnapshot();
  // expect(await page.getByRole('button').click());
  // expect(await page.waitForTimeout(3000));
  // expect(await page.goto(''));
});
test('Tooltip is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[27]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Accordian is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[28]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Select is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[29]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Avatar is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[30]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('spinner is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[31]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
test('Text is displayed ', async ({ page }) => {
  await page.goto(`file://${pathNew[32]}`);
  expect(await page.screenshot()).toMatchSnapshot();
});
