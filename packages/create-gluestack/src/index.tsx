#! /usr/bin/env node
import { cancel, text, select, isCancel } from '@clack/prompts';
import { displayHelp } from './help';
import data from './data';
import chalk from 'chalk';
import { cloneProject, gitInit, installDependencies } from './utils';

export async function main(args: string[]) {
  console.log(chalk.bold.magenta('\nWelcome to gluestack-ui v2!'));
  console.log(chalk.yellow('Creating a new project with gluestack-ui v2.'));

  const supportedFrameworkArgs = [
    '--expo-router',
    '--next-app-router',
    '--universal',
  ];

  const supportedPackagemanagers = ['npm', 'yarn', 'pnpm', 'bun'];
  const supportedPackagemanagerArgs = supportedPackagemanagers.map(
    (manager) => '--use-' + manager
  );

  const supportedDocumentationArgs = ['--help', '-h'];

  let selectedFramework = '';
  let selectedPackageManager = '';
  let projName = '';

  if (args.length > 0) {
    if (args.some((arg) => supportedDocumentationArgs.includes(arg))) {
      displayHelp();
    }

    if (!args[0].startsWith('-')) {
      projName = args[0];
      args.shift();
    }
    args.forEach((arg) => {
      if (supportedFrameworkArgs.includes(arg)) {
        selectedFramework = arg.slice(2);
      } else if (supportedPackagemanagerArgs.includes(arg)) {
        selectedPackageManager = arg.slice(6);
      } else {
        console.log(`Unsupported argument: ${arg}\n`);
        displayHelp();
      }
    });
  }

  process.on('SIGINT', function () {
    cancel('Operation cancelled.');
    process.exit(0);
  });
  let templateName = selectedFramework;
  if (templateName === '') {
    const { question, options } = data.options.framework.default;

    // @ts-ignore
    const frameworkSelection = await select({
      message: question,
      options: [...options],
    });

    // Handle cancellation
    if (isCancel(frameworkSelection)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    selectedFramework = frameworkSelection as string;
    templateName = selectedFramework;
  }

  // Ensure templateName is a string before calling includes
  if (typeof templateName !== 'string') {
    console.error('Invalid template selection');
    process.exit(1);
  }

  // Universal Template coming soon...
  if (templateName.includes('universal')) {
    console.log(chalk.bgGreen('\nComing Soon...\n'));
    process.exit(0);
  }

  if (projName === '') {
    const projectNameInput = await text({
      message: 'Enter the name of your project: ',
      placeholder: 'my-app',
      defaultValue: 'my-app',
    });

    // Handle cancellation
    if (isCancel(projectNameInput)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    projName = projectNameInput as string;
  }

  templateName = `${templateName}`;

  if (selectedPackageManager === '') {
    const userPackageManager = process.env.npm_config_user_agent;
    if (userPackageManager && userPackageManager.includes('bun')) {
      selectedPackageManager = 'bun';
    } else if (userPackageManager && userPackageManager.includes('pnpm')) {
      selectedPackageManager = 'pnpm';
    } else if (userPackageManager && userPackageManager.includes('yarn')) {
      selectedPackageManager = 'yarn';
    } else {
      selectedPackageManager = 'npm';
    }
  }

  let message = '';
  if (templateName.includes('universal')) {
    message = 'a universal';
  } else if (templateName.includes('next')) {
    message = 'a next-app-router';
  } else if (templateName.includes('expo')) {
    message = 'an expo';
  }
  console.log(
    `⏳ Creating ${message} app. Hang tight, this may take a while...\n`
  );

  try {
    console.log('Starting project cloning process...');
    await cloneProject(projName, templateName);
    console.log('Project cloning completed.');
    if (!templateName.includes('universal')) {
      console.log('Starting dependency installation...');
      await installDependencies(projName, selectedPackageManager);
      console.log('Dependency installation completed.');
    }
    console.log('Initializing git repository...');
    await gitInit(projName);
    console.log('Git initialization completed.');
    console.log(
      chalk.green(
        '\nProject created successfully in ' + projName + ' folder.\n'
      )
    );
  } catch (error: any) {
    console.error('Failed to create project');
    console.error('Error details:', error);
    process.exit(1);
  }
}

// Execute the main function with command line arguments
if (require.main === module) {
  const args = process.argv.slice(2);
  main(args).catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
}
