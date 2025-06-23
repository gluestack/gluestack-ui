import chokidar from 'chokidar';

import path from 'path';
import fs from 'fs';
import mappers from './mappers';

// Define mapper interface
interface Mapper {
  component?: (component: string, event?: string) => Promise<void> | void;
  nonComponent?: (filePath: string) => Promise<void> | void;
}

interface MapperConfig {
  name: string;
  mapper: Mapper;
}

const sourcePath = './src';
const componentsPath = './src/components/ui';

// Debounce map to prevent rapid repeated processing
const debounceMap = new Map<string, ReturnType<typeof setTimeout>>();
const DEBOUNCE_DELAY = 1000; // 1 second

// Track processed files to prevent infinite loops
const processedFiles = new Map<string, number>();
const PROCESSED_FILE_COOLDOWN = 3000; // 30 seconds cooldown for same file

// Get command line arguments for mapper filtering
const args = process.argv.slice(2);
const mapperFilter = args
  .find((arg) => arg.startsWith('--mapper='))
  ?.split('=')[1];

// Check for sync flag
const syncFlag = args.includes('--sync') || args.includes('--initial');

// Filter mappers based on command line argument
const activeMappers: MapperConfig[] = mapperFilter
  ? mappers.filter((mapper) => mapper.name === mapperFilter)
  : mappers;

if (mapperFilter && activeMappers.length === 0) {
  console.error(
    `❌ Mapper "${mapperFilter}" not found. Available mappers: ${mappers.map((m) => m.name).join(', ')}`
  );
  process.exit(1);
}

if (mapperFilter) {
  console.log(`🎯 Running only mapper: ${mapperFilter}`);
} else {
  console.log(
    `🔄 Running all mappers: ${mappers.map((m) => m.name).join(', ')}`
  );
}

if (syncFlag) {
  console.log(`🔄 Sync mode enabled - will process existing files and exit`);
} else {
  console.log(`👀 Dev mode - will watch for file changes continuously`);
}

// Track initial sync completion
let initialSyncCompleted = false;
let initialFileCount = 0;
let processedFileCount = 0;

// Initialize watcher
const watcher = chokidar.watch(sourcePath, {
  persistent: !syncFlag, // Don't persist if sync flag is set
  ignoreInitial: !syncFlag, // Process existing files only if sync flag is set
  awaitWriteFinish: {
    stabilityThreshold: 1000,
    pollInterval: 100,
  },
  ignored: [
    /node_modules/,
    /\.git/,
    /\.next/,
    /\.cache/,
    /\.DS_Store/,
    /\.env/,
    /\.log$/,
    /\.tmp$/,
    // Ignore specific directories that we don't want to monitor
    '**/node_modules/**',
    '**/.git/**',
    '**/.next/**',
    '**/.cache/**',
    '**/.DS_Store',
    '**/*.log',
    '**/*.tmp',
  ],
}) as unknown as {
  on: (event: string, callback: (path: string) => void) => any;
  close: () => void;
};

const getComponentFromPath = (filePath: string): string | null => {
  const normalizedPath = path.normalize(filePath);
  if (!normalizedPath.includes('components/ui')) {
    return null;
  }
  const relativePath = path.relative(componentsPath, normalizedPath);
  const parts = relativePath.split(path.sep);

  if (parts.length > 0) {
    return parts[0];
  }
  return null;
};

const shouldProcessFile = (filePath: string): boolean => {
  const normalizedPath = path.normalize(filePath);

  // Only process files in our target directories
  const targetDirs = [
    'src/components',
    'src/utils',
    'src/docs',
    'src/sidebar.json',
  ];

  const isInTargetDir = targetDirs.some((dir) => normalizedPath.includes(dir));
  if (!isInTargetDir) {
    return false;
  }

  // Skip hidden files and directories
  // const fileName = path.basename(filePath);
  // if (fileName.startsWith('.')) {
  //   return false;
  // }

  // Skip certain file types
  const skipExtensions = ['.log', '.tmp', '.cache', '.lock', '.tsbuildinfo'];
  const ext = path.extname(filePath);
  if (skipExtensions.includes(ext)) {
    return false;
  }

  // Skip if path contains node_modules (extra safety)
  if (normalizedPath.includes('node_modules')) {
    return false;
  }

  return true;
};

// const isRecentlyModified = (
//   filePath: string,
//   minutesThreshold: number = 30
// ): boolean => {
//   try {
//     if (!fs.existsSync(filePath)) {
//       return false;
//     }

//     const stats = fs.statSync(filePath);
//     const now = new Date();
//     const modifiedTime = stats.mtime;
//     const diffInMinutes =
//       (now.getTime() - modifiedTime.getTime()) / (1000 * 60);

//     return diffInMinutes <= minutesThreshold;
//   } catch (error) {
//     return false;
//   }
// };

const hasFileBeenProcessedRecently = (filePath: string): boolean => {
  const now = Date.now();
  if (processedFiles.has(filePath)) {
    const lastProcessed = processedFiles.get(filePath)!;
    return now - lastProcessed < PROCESSED_FILE_COOLDOWN;
  }
  return false;
};

const processFileChange = async (event: string, filePath: string) => {
  // Skip files that shouldn't be processed
  if (!shouldProcessFile(filePath)) {
    return;
  }

  // For special files like sidebar.json, check if processed recently
  if (
    path.basename(filePath) === 'sidebar.json' &&
    hasFileBeenProcessedRecently(filePath)
  ) {
    return;
  }

  const fileKey = `${event}-${filePath}`;

  // Clear existing timeout for this file
  if (debounceMap.has(fileKey)) {
    clearTimeout(debounceMap.get(fileKey)!);
  }

  // Set new timeout for debouncing
  debounceMap.set(
    fileKey,
    setTimeout(async () => {
      try {
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`📁 Processing ${event}: ${relativePath}`);

        // Mark file as processed
        processedFiles.set(filePath, Date.now());

        const component = getComponentFromPath(filePath);

        // Process with all active mappers
        for (const mapperConfig of activeMappers) {
          try {
            const { name, mapper } = mapperConfig;

            if (component) {
              if (mapper && typeof mapper.component === 'function') {
                await mapper.component(component, event);
              } else {
                console.warn(`Mapper ${name} doesn't have required methods`);
              }
            } else {
              if (mapper && typeof mapper.nonComponent === 'function') {
                await mapper.nonComponent(filePath);
              } else {
                console.warn(`Mapper ${name} doesn't have required methods`);
              }
            }
          } catch (error) {
            if (component) {
              console.error(
                `❌ Error in mapper ${mapperConfig.name} for component ${component}:`,
                error
              );
            } else {
              console.error(
                `❌ Error in mapper ${mapperConfig.name} for file ${relativePath}:`,
                error
              );
            }
          }
        }

        // Track processed files in sync mode
        if (syncFlag && event === 'added') {
          processedFileCount++;
          checkSyncCompletion();
        }
      } finally {
        // Clean up the debounce map
        debounceMap.delete(fileKey);
      }
    }, DEBOUNCE_DELAY)
  );
};

// Check if sync is complete and exit if so
const checkSyncCompletion = () => {
  if (
    syncFlag &&
    initialSyncCompleted &&
    processedFileCount >= initialFileCount
  ) {
    console.log(`✅ Sync completed! Processed ${processedFileCount} files.`);
    process.exit(0);
  }
};

// Set up event handlers
watcher
  .on('add', (filePath: string) => {
    if (syncFlag && !initialSyncCompleted) {
      initialFileCount++;
    }
    processFileChange('added', filePath);
  })
  .on('change', (filePath: string) => processFileChange('changed', filePath))
  .on('unlink', (filePath: string) => processFileChange('removed', filePath))
  .on('addDir', (dirPath: string) => {
    // Handle directory additions if needed
    const component = getComponentFromPath(dirPath);
    if (component && shouldProcessFile(dirPath)) {
      console.log(
        `📂 Directory added: ${path.relative(process.cwd(), dirPath)}`
      );
      processFileChange('added', dirPath);
    }
  })
  .on('unlinkDir', (dirPath: string) => {
    // Handle directory deletions
    const component = getComponentFromPath(dirPath);
    if (component && shouldProcessFile(dirPath)) {
      console.log(
        `📂 Directory removed: ${path.relative(process.cwd(), dirPath)}`
      );
      processFileChange('removed', dirPath);
    }
  })
  .on('error', (error: Error) => {
    console.error('❌ Watcher error:', error);
  })
  .on('ready', () => {
    console.log('✅ File watcher is ready');

    if (syncFlag) {
      initialSyncCompleted = true;
      console.log(`📊 Found ${initialFileCount} files to process`);

      // If no files to process, exit immediately
      if (initialFileCount === 0) {
        console.log(`✅ Sync completed! No files to process.`);
        process.exit(0);
      }
    }
  });

console.log(`👀 Watching for file changes in ${sourcePath}...`);
if (syncFlag) {
  console.log(
    `💡 Sync mode: Processing all existing files and will exit when complete`
  );
} else {
  console.log(`💡 Dev mode: Processing all files and watching for new changes`);
  console.log(
    `💡 Use --sync flag to process all existing files once: npm run <script> -- --sync`
  );
}
