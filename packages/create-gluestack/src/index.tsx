#! /usr/bin/env node
import { cancel, text, select, isCancel } from '@clack/prompts';
import { displayHelp } from './help';
import data from './data';
import chalk from 'chalk';
import { cloneProject, gitInit, installDependencies } from './utils';

export async function main(args: string[]) {
  console.log(chalk.bold.magenta('\nWelcome to gluestack-ui v4.1 alpha!'));
  console.log(chalk.yellow('Creating a new project with gluestack-ui v4.1 alpha.'));

  const supportedFrameworkArgs = [
    '--starter-kit-expo',
    '--starter-kit-next',
    '--universal',
    '--starter-kit-expo-uniwind',
  ];

  const supportedStylingArgs = ['--nativewind', '--uniwind'];

  const supportedPackagemanagers = ['npm', 'yarn', 'pnpm', 'bun'];
  const supportedPackagemanagerArgs = supportedPackagemanagers.map(
    (manager) => '--use-' + manager
  );

  const supportedDocumentationArgs = ['--help', '-h'];

  let selectedFramework = '';
  let selectedStyling = '';
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
      } else if (supportedStylingArgs.includes(arg)) {
        selectedStyling = arg.slice(2);
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

  // Handle backward compatibility for old framework args
  if (selectedFramework === 'starter-kit-expo') {
    selectedFramework = 'expo';
    selectedStyling = selectedStyling || 'nativewind';
  } else if (selectedFramework === 'starter-kit-expo-uniwind') {
    selectedFramework = 'expo';
    selectedStyling = 'uniwind';
  } else if (selectedFramework === 'starter-kit-next') {
    selectedFramework = 'next';
    selectedStyling = selectedStyling || 'nativewind';
  }

  // Step 1: Framework selection (if not provided via args)
  if (selectedFramework === '') {
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
  }

  // Universal Template coming soon...
  if (selectedFramework === 'universal') {
    console.log(chalk.bgGreen('\nComing Soon...\n'));
    process.exit(0);
  }

  // Step 2: Styling engine selection (conditional)
  const stylingOptions = (data.options.stylingEngine as any)[selectedFramework]?.options || [];

  if (selectedStyling === '') {
    if (stylingOptions.length > 1) {
      // Multiple options → prompt user
      // @ts-ignore
      const stylingSelection = await select({
        message: (data.options.stylingEngine as any)[selectedFramework].question,
        options: [...stylingOptions],
      });

      // Handle cancellation
      if (isCancel(stylingSelection)) {
        cancel('Operation cancelled.');
        process.exit(0);
      }

      selectedStyling = stylingSelection as string;
    } else if (stylingOptions.length === 1) {
      // Single option → auto-select
      selectedStyling = stylingOptions[0].value;
    } else {
      // No options → framework not ready
      console.log(chalk.bgGreen('\nComing Soon...\n'));
      process.exit(0);
    }
  }

  // Resolve template name from framework + styling selection
  const selectedOption = stylingOptions.find((opt: any) => opt.value === selectedStyling);

  if (!selectedOption) {
    console.error('Invalid styling selection for the chosen framework');
    process.exit(1);
  }

  const templateName = selectedOption.templateName;

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
  if (selectedFramework === 'expo') {
    message = `an Expo app with ${selectedStyling === 'uniwind' ? 'UniWind' : 'NativeWind'}`;
  } else if (selectedFramework === 'next') {
    message = `a Next.js app with NativeWind`;
  } else if (selectedFramework === 'universal') {
    message = 'a universal app';
  }
  console.log(
    `⏳ Creating ${message}. Hang tight, this may take a while...\n`
  );

  try {
    await cloneProject(projName, templateName);
    if (selectedFramework !== 'universal') {
      await installDependencies(projName, selectedPackageManager);
    }
    await gitInit(projName);
    console.log(
      chalk.green(
        '\nProject created successfully in ' + projName + ' folder.\n'
      )
    );
  } catch (error: any) {
    console.error('Failed to create project');
    console.error(error.message);
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
