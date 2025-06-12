// import { initChecker } from '../init-checker';
// import { initialProviderAdder } from '../component-adder';
// import fs from 'fs-extra';
// import { projectDetector } from '@gluestack/ui-project-detector';
// import { nextInstaller } from './next';
// import { expoInstaller } from './expo';
// import { isCancel, cancel, text, confirm, log, select } from '@clack/prompts';
// import { isFollowingSrcDir, mergePaths, isStartingWithSrc } from './utils';
// import { get } from 'http';
// import { npmPackageInstaller } from './npm-package';
// import path, { join } from 'path';
// import os from 'os';
// import { match } from 'assert';
// const getComponentRepoType = async (): Promise<string | symbol> => {
//   const repoType: string | symbol = await select({
//     message:
//       'Do You wish to add components in your current repository or import them from another library?',
//     options: [
//       { value: 'local', label: 'local' },
//       { value: 'external-library', label: 'external-library' },
//     ],
//   });
//   if (isCancel(repoType)) {
//     cancel('Operation cancelled.');
//     process.exit(0);
//   }
//   return repoType;
// };
// const homeDir = os.homedir();
// const finalMessage = `
// Gluestack Provider has been added to your components folder.
// To use it, simply wrap your app component with the <GluestackUIProvider> component like this:
// export default function App() {
//   return (
//     <GluestackUIProvider>
//       <Component />
//     </GluestackUIProvider>
//   );
// }
// `;

// const autoInstaller = async (folderPath: string): Promise<boolean> => {
//   // const projectData = await projectDetector();
//   let setupTypeAutomatic = false;
//   const isSrcDir = isFollowingSrcDir();
//   const isSrcIncludedInPath = isStartingWithSrc(folderPath);
//   if (isSrcDir && !isSrcIncludedInPath) {
//     const shouldContinue = await confirm({
//       message: `Detected "src" folder. Do you want to update component paths to use "${mergePaths(
//         folderPath,
//         './src'
//       )}"?`,
//     });
//     if (isCancel(shouldContinue)) {
//       cancel('Operation cancelled.');
//       process.exit(0);
//     }
//     if (shouldContinue) {
//       folderPath = mergePaths(folderPath, './src');
//       log.success('Component paths updated to use "./src/components".');
//     } else {
//       log.warning('Component paths not updated.');
//     }
//   }
//   // if (projectData.framework == 'Unknown' && !folderPath.includes('src')) {
//   //   fs.mkdirSync(path.join(process.cwd(), './src'));
//   //   folderPath = mergePaths(folderPath, './src');
//   // }
//   return await initialProviderAdder(folderPath);

//   // if (projectData.framework === 'Next') {
//   //   setupTypeAutomatic = await nextInstaller(folderPath, '');
//   //   if (setupTypeAutomatic) {
//   //     log.success('Auto setup was successful!');
//   //   } else {
//   //     log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//   //     log.info(
//   //       '\x1b[32m' +
//   //         `Please visit https://ui.gluestack.io/docs/getting-started/install-nextjs for more information on manual setup.` +
//   //         '\x1b[0m'
//   //     );
//   //   }
//   // } else if (projectData.framework === 'Expo') {
//   //   await expoInstaller();
//   //   log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//   // } else {
//   //   // log.warn(
//   //   //   '\x1b[31mWARNING: The gluestack-ui CLI is currently in an experimental stage for your specific framework or operating system configuration.\x1b[0m'
//   //   // );
//   //   // await expoInstaller();
//   //   await npmPackageInstaller(join(process.cwd(), 'src'));
//   // }
// };

// const autoSetup = async (): Promise<any> => {
//   try {
//     let folderPath = await text({
//       message:
//         'Can you please provide the path where you would like to add your components?',
//       placeholder: './components',
//       initialValue: './components',
//       validate(value) {
//         if (value.length === 0) return `Value is required!`;
//       },
//     });
//     if (isCancel(folderPath)) {
//       cancel('Operation cancelled.');
//       process.exit(0);
//     }

//     return await autoInstaller(folderPath);
//   } catch (err) {
//     log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
//     return false;
//   }
// };

// const getPackagePath = async (): Promise<string> => {
//   let packagePath = await text({
//     message:
//       'Seems like you are using an external library! Please specify the name of library.',

//     validate(value) {
//       if (value.length === 0) return `Value is required!`;
//     },
//   });
//   if (isCancel(packagePath)) {
//     cancel('Operation cancelled.');
//     process.exit(0);
//   }
//   return packagePath;
// };

// const getFolderPath = async (): Promise<string> => {
//   let folderPath = await text({
//     message:
//       'Can you please provide the path where you would like to add your components?',
//     placeholder: './components',
//     initialValue: './components',
//     validate(value) {
//       if (value.length === 0) return `Value is required!`;
//     },
//   });
//   if (isCancel(folderPath)) {
//     cancel('Operation cancelled.');
//     process.exit(0);
//   }
//   return folderPath;
// };

// const externalLibInstaller = async (packageName: string): Promise<any> => {
//   const projectData = await projectDetector();
//   let setupTypeAutomatic = false;
//   let folderPath = '';
//   try {
//     if (projectData.framework === 'Next') {
//       setupTypeAutomatic = await nextInstaller(folderPath, packageName);
//       if (setupTypeAutomatic) {
//         log.success('Auto setup was successful!');
//       } else {
//         log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//         log.info(
//           '\x1b[32m' +
//             `Please visit https://ui.gluestack.io/docs/getting-started/install-nextjs for more information on manual setup.` +
//             '\x1b[0m'
//         );
//       }
//     } else if (projectData.framework === 'Expo') {
//       await expoInstaller();
//       log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//     } else {
//       // log.warn(
//       //   '\x1b[31mWARNING: The gluestack-ui CLI is currently in an experimental stage for your specific framework or operating system configuration.\x1b[0m'
//       // );
//       // await expoInstaller();
//       await npmPackageInstaller(join(process.cwd(), 'src'));
//     }
//   } catch (err) {
//     log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
//   }

//   // await initialProviderAdder(folderPath, projectData.framework);
// };

// const updateGluestackUIConfig = async (): Promise<any> => {
//   const sourcePath = path.join(
//     homeDir,
//     '.gluestack',
//     'cache',
//     'gluestack-ui',
//     'example',
//     'storybook',
//     'src'
//   );
//   try {
//     const folderPath = process.cwd();

//     let res = fs.readFileSync(
//       join(folderPath, 'gluestack-ui.config.ts'),
//       'utf8'
//     );
//     const regex = /componentPath\:(.*?)\,/gm;
//     const matches = res.match(regex);
//     let componentsPath;
//     if (matches?.length) {
//       componentsPath = matches[0].match(/\'(.*?)\'/gm);
//       if (componentsPath == null) {
//         componentsPath = matches[0].match(/\"(.*?)\"/gm);
//       }
//     }
//     // Update Gluestack UI config file
//     const configFile = await fs.readFile(
//       path.join(sourcePath, 'gluestack-ui.config.ts'),
//       'utf8'
//     );

//     // const folderName = path.relative(currDir, targetPath);

//     const newConfig = configFile.replace(
//       /componentPath:\s+'[^']+'/,
//       `componentPath: ${componentsPath}`
//     );
//     fs.writeFileSync(
//       path.join(folderPath, 'gluestack-ui.config.ts'),
//       newConfig
//     );
//     log.success(
//       `\x1b[32m✅  ${
//         '\u001b[1m' + 'GluestackUIProvider' + '\u001b[22m'
//       } \x1b[0m added successfully!`
//     );
//   } catch (err) {
//     log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
//     return false;
//   }
// };

// const installGluestackUI = async (): Promise<any> => {
//   return await autoSetup();
//   // try {
//   //   const componentsRepoType = await getComponentRepoType();
//   //   if (componentsRepoType == 'local') {
//   //   } else {
//   //     if (componentsRepoType == 'external-library') {
//   //       await externalLibInstaller(await getPackagePath());
//   //     }
//   //   }
//   // } catch (err) {
//   //   log.error(JSON.stringify(err));
//   // }
//   // try {
//   // const componentsRepoType=
//   //   let folderPath = await text({
//   //     message:
//   //       'Can you please provide the path where you would like to add your components?',
//   //     placeholder: './components',
//   //     initialValue: './components',
//   //     validate(value) {
//   //       if (value.length === 0) return `Value is required!`;
//   //     },
//   //   });
//   //   if (isCancel(folderPath)) {
//   //     cancel('Operation cancelled.');
//   //     process.exit(0);
//   //   }
//   //   const isSrcDir = isFollowingSrcDir();
//   //   const isSrcIncludedInPath = isStartingWithSrc(folderPath);
//   //   if (isSrcDir && !isSrcIncludedInPath) {
//   //     const shouldContinue = await confirm({
//   //       message: `Detected "src" folder. Do you want to update component paths to use "${mergePaths(
//   //         folderPath,
//   //         './src'
//   //       )}"?`,
//   //     });
//   //     if (isCancel(shouldContinue)) {
//   //       cancel('Operation cancelled.');
//   //       process.exit(0);
//   //     }
//   //     if (shouldContinue) {
//   //       folderPath = mergePaths(folderPath, './src');
//   //       log.success('Component paths updated to use "./src/components".');
//   //     } else {
//   //       log.warning('Component paths not updated.');
//   //     }
//   //   }
//   //   await initialProviderAdder(folderPath);
//   //   const finalMessage = `
//   //   Gluestack Provider has been added to your components folder.
//   //   To use it, simply wrap your app component with the <GluestackUIProvider> component like this:
//   //   export default function App() {
//   //     return (
//   //       <GluestackUIProvider>
//   //         <Component />
//   //       </GluestackUIProvider>
//   //     );
//   //   }
//   //   `;
//   //   const projectData = await projectDetector();
//   //   let setupTypeAutomatic = false;
//   //   if (projectData.framework === 'Next') {
//   //     setupTypeAutomatic = await nextInstaller(folderPath);
//   //     if (setupTypeAutomatic) {
//   //       log.success('Auto setup was successful!');
//   //     } else {
//   //       log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//   //       log.info(
//   //         '\x1b[32m' +
//   //           `Please visit https://ui.gluestack.io/docs/getting-started/install-nextjs for more information on manual setup.` +
//   //           '\x1b[0m'
//   //       );
//   //     }
//   //   } else if (projectData.framework === 'Expo') {
//   //     await expoInstaller();
//   //     log.info('\x1b[32m' + finalMessage + '\x1b[0m');
//   //   } else {
//   //     // log.warn(
//   //     //   '\x1b[31mWARNING: The gluestack-ui CLI is currently in an experimental stage for your specific framework or operating system configuration.\x1b[0m'
//   //     // );
//   //     await expoInstaller();
//   //   }
//   //   return true;
//   // } catch (err) {
//   //   log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
//   //   return false;
//   // }
// };

// const initializer = async (
//   askUserToInit: boolean,
//   command: string
// ): Promise<Record<string, boolean>> => {
//   try {
//     const gluestackUIConfigPresent = await initChecker();
//     let gluestackUIInstalled = false;
//     if (!gluestackUIConfigPresent) {
//       let install = true;
//       if (askUserToInit) {
//         log.error(
//           '\x1b[31m' +
//             `gluestack-ui is not initialised in your project!` +
//             '\x1b[0m'
//         );

//         const shouldContinue = await confirm({
//           message: 'Do you wish to initialise it?',
//         });

//         if (isCancel(shouldContinue)) {
//           cancel('Operation cancelled.');
//           process.exit(0);
//         }

//         if (!shouldContinue) {
//           install = false;
//         }
//       }

//       if (install) {
//         gluestackUIInstalled = await installGluestackUI();
//         log.success('gluestack-ui initialization completed!');
//       } else {
//         log.error('\u001b[31mgluestack-ui initialization canceled!\u001b[0m');
//       }
//     } else {
//       gluestackUIInstalled = true;
//       log.success(
//         '\u001b[32mgluestack-ui is already initialized in your project!\u001b[0m'
//       );
//       if (command == 'init') {
//         const shouldContinue = await confirm({
//           message: `Do you wish to update gluestack-ui.config.ts ? This will remove all your existing changes and replace them with new.`,
//         });

//         if (isCancel(shouldContinue)) {
//           cancel('Operation cancelled.');
//           process.exit(0);
//         }
//         if (shouldContinue) {
//           await updateGluestackUIConfig();
//         }
//       }
//     }
//     return { gluestackUIConfigPresent, gluestackUIInstalled };
//   } catch (err) {
//     log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
//     return { gluestackUIConfigPresent: false, gluestackUIInstalled: false };
//   }
// };

// export { initializer };
