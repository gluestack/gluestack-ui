const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkMdx = require('remark-mdx');
const remarkStringify = require('remark-stringify');
const semanticExtractor = require('./semantic-extractor');

async function test() {
  const input = `<Button variant="outline" size="sm">Click me</Button>\n\n<CodePreviewer code={\`console.log('hello')\`} />`;

  const processed = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(semanticExtractor)
    .use(remarkStringify)
    .process(input);

  const output = processed.toString();
  console.log('Input:', input);
  console.log('Output:', output);

  const hasComponentDesc = output.includes('[Component: Button: variant="outline", size="sm"]');
  const hasCodeBlock = output.includes('```javascript\nconsole.log(\'hello\')\n```');

  if (hasComponentDesc && hasCodeBlock) {
    console.log('✅ TEST PASSED');
  } else {
    console.error('❌ TEST FAILED');
    if (!hasComponentDesc) console.error('Missing component description');
    if (!hasCodeBlock) console.error('Missing code block');
    process.exit(1);
  }
}

test();
