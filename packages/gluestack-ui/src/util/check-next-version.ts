import { log } from '@clack/prompts';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface PackageJson {
  dependencies?: {
    next?: string;
    [key: string]: string | undefined;
  };
  devDependencies?: {
    next?: string;
    [key: string]: string | undefined;
  };
}

interface VersionResult {
  version: string;
  majorVersion: number;
  isNextjs15OrHigher: boolean;
  error?: string;
}

/**
 * Cleans version string by removing special characters (^, ~, >, <, =, v)
 * @param version - Raw version string from package.json
 */
const cleanVersionString = (version: string): string => {
  return version.replace(/[^\d.]/g, '');
};

/**
 * Gets the Next.js major version from package.json
 * @param projectPath - Path to the project root directory
 * @returns Promise containing version information and status
 */
async function getNextjsVersion(
  projectPath: string = process.cwd()
): Promise<VersionResult> {
  try {
    const packageJsonPath = join(projectPath, 'package.json');

    // Check if package.json exists
    if (!existsSync(packageJsonPath)) {
      return {
        version: '',
        majorVersion: 0,
        isNextjs15OrHigher: false,
        error: 'package.json not found',
      };
    }

    // Read and parse package.json
    const packageJson: PackageJson = JSON.parse(
      readFileSync(packageJsonPath, 'utf8')
    );

    // Check both dependencies and devDependencies for next
    const nextVersion =
      packageJson.dependencies?.next || packageJson.devDependencies?.next;

    if (!nextVersion) {
      return {
        version: '',
        majorVersion: 0,
        isNextjs15OrHigher: false,
        error: 'Next.js not found in dependencies',
      };
    }

    // Clean the version string and get major version
    const cleanVersion = cleanVersionString(nextVersion);
    const majorVersion = parseInt(cleanVersion.split('.')[0], 10);

    // Validate that majorVersion is a number
    if (isNaN(majorVersion)) {
      return {
        version: cleanVersion,
        majorVersion: 0,
        isNextjs15OrHigher: false,
        error: 'Invalid version format',
      };
    }

    return {
      version: cleanVersion,
      majorVersion,
      isNextjs15OrHigher: majorVersion >= 15,
    };
  } catch (error) {
    return {
      version: '',
      majorVersion: 0,
      isNextjs15OrHigher: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export { getNextjsVersion, VersionResult, PackageJson };

// Example usage with types:

export async function checkNextVersion(): Promise<boolean | undefined> {
  try {
    const result: VersionResult = await getNextjsVersion();

    if (result.error) {
      // log.error(`Error: ${result.error}`);
      return false;
    }

    return result.isNextjs15OrHigher;
  } catch (error) {
    // log.error(`Unexpected error: ${error}`);
    return undefined;
  }
}
