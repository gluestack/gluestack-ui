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
const fileName = 'advanced';
const Stories = [
  {
    folderName: 'ReactNativeArchitecture',
    storyName: 'React Native Architecture',
  },
  { folderName: 'WebArchitecture', storyName: 'Web Architecture' },
  { folderName: 'Architecture', storyName: 'Architecture' },
  { folderName: 'Specificity', storyName: 'Specificity' },
  { folderName: 'TypeScript', storyName: 'TypeScript' },
  { folderName: 'StyleIds', storyName: 'StyleIds' },
  { folderName: 'BabelPlugins', storyName: 'Babel Plugins' },
];
var getDirName = require('path').dirname;

(async () => {
  Stories.forEach((story) => {
    createStory(story.folderName, fileName, fileName, story.storyName);
  });
})();

function createStory(StoryFolderName, sbPath, sectionName, storyName) {
  //   const sectionName = choices.filter((choice) => choice.value === sbPath)[0]
  //     .title;

  const storyPath = path.resolve(
    __dirname,
    '../src',
    sbPath,
    StoryFolderName,
    'index.stories.mdx'
  );

  //   console.log(storyPath);
  writeFile(
    storyPath,
    ejs.render(template, {
      storyName: storyName,
      sectionName: sectionName,
    })
  );
}

async function writeFile(path1, contents) {
  try {
    fs.mkdirSync(getDirName(path1), { recursive: true });
    fs.writeFileSync(path1, contents);
  } catch (err) {
    console.error(err);
    throw 'Parameter is not a number!';
  }
}
