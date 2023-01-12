const prompts = require('prompts');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const template = `import { Canvas, Meta, Story } from '@storybook/addon-docs';

<Meta title="<%- sectionName %>/<%- storyName %>" />

# <%- storyName %>

We can even preview multiple Stories in a block. This
gets rendered as a group but defines individual stories
with unique URLs, which is great for review and testing.
`;
const choices = [
  { title: 'components', value: 'components' },
  { title: 'hooks', value: 'hooks' },
  { title: 'recipes', value: 'recipes' },
  { title: 'overview', value: 'overview' },
  { title: 'Getting Started', value: 'gettingstarted' },
  { title: 'API', value: 'API' },
];
const questions = [
  {
    type: 'text',
    name: 'storyName',
    message: 'What is your story name?',
  },
  {
    type: 'select',
    name: 'value',
    message: 'Select type of story',
    choices: choices,
    initial: 0,
  },
];

(async () => {
  const response = await prompts(questions);
  createStory(response.storyName, response.value, response.title);
})();

function createStory(storyName, sbPath) {
  const sectionName = choices.filter((choice) => choice.value === sbPath)[0]
    .title;

  const storyPath = path.resolve(
    __dirname,
    '../src',
    sbPath,
    storyName,
    'index.stories.mdx'
  );
  writeFile(
    storyPath,
    ejs.render(template, {
      storyName: storyName,
      sectionName: sectionName,
    })
  );
}
var getDirName = require('path').dirname;

async function writeFile(path1, contents) {
  try {
    fs.mkdirSync(getDirName(path1), { recursive: true });
    fs.writeFileSync(path1, contents);
  } catch (err) {
    console.error(err);
    throw 'Parameter is not a number!';
  }
}
