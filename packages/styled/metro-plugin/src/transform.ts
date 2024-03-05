import { outputFile, pathExists, appendFile } from 'fs-extra';
const worker = require('metro-transform-worker');
const path = require('path');
const { parseAndExtractConfig } = require('@gluestack-style/extract-styles');

export async function transform(
  config: any,
  rootDirectory: any,
  filename: any,
  data: any,
  options: any
) {
  const ogPath = config?.ogTransformPath || config.transformerPath;
  const transformer = ogPath ? require(ogPath) : worker;
  const output = config?.options?.output;

  const fileNameExtensions = ['.js', '.ts', '.jsx', '.tsx'];

  const outputDir = path.join(rootDirectory, output);

  if (
    !filename?.includes('node_modules') &&
    !filename?.includes('.expo') &&
    fileNameExtensions.some((ext) => filename.endsWith(ext))
  ) {
    let content = ``;
    const sourceCode = data.toString('utf8');
    const { code, styles } = parseAndExtractConfig(sourceCode, {
      ...config?.options,
      filename,
    });

    // console.log(
    //   `**************${filename}*****************\n${code}\n*************OUTPUT=${outputDir}************\n${content}\n`
    // );

    Object.keys(styles).forEach((type) => {
      styles[type].forEach(({ cssRuleset }: any) => {
        content += `${cssRuleset} `;
      });
    });

    if (await pathExists(outputDir)) {
      await appendFile(outputDir, content, {
        encoding: 'utf-8',
      });
    } else {
      await outputFile(outputDir, content, {
        encoding: 'utf8',
      });
    }

    return transformer.transform(
      config,
      rootDirectory,
      filename,
      code.toString('utf8'),
      options
    );
  }

  return transformer.transform(config, rootDirectory, filename, data, options);
}
