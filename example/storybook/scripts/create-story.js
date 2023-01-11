const prompts = require('prompts');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

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
    choices: [
      { title: 'components', value: 'components' },
      { title: 'hooks', value: 'hooks' },
      { title: 'recipes', value: 'recipes' },
    ],
    initial: 0,
  },
];

(async () => {
  const response = await prompts(questions);

  createStory(response.storyName, response.value);
})();

function createStory(storyName, sbPath) {
  const { stories } = require('../src/templates/recipes.ts');
  stories.map((story) => {
    const storyPath = path.resolve(
      __dirname,
      '../src',
      sbPath,
      storyName,
      storyName + story.extension
    );
    writeFile(
      storyPath,
      ejs.render(story.content, {
        storyName: storyName,
        path: sbPath,
      })
    );
  });
}
var getDirName = require('path').dirname;

async function writeFile(path, contents) {
  try {
    fs.mkdirSync(getDirName(path), { recursive: true });
    fs.writeFileSync(path, contents);
  } catch (err) {
    console.error(err);
    throw 'Parameter is not a number!';
  }
}
