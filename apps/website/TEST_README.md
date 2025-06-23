# Website Integration Tests

This directory contains integration tests for the website that verify the complete build and deployment workflow.

## Test Cases

The test suite includes 3 focused test cases:

### 1. Sync Test (5 minutes timeout)
- Navigates to the root directory (`cd ../..`)
- Runs `yarn sync:website`
- Verifies sync completes successfully

### 2. Build Test (5 minutes timeout)
- Builds the website using `yarn build`
- Verifies build completes successfully

### 3. Server Test (3 minutes timeout)
- Starts the website server on port 4000
- Verifies server starts and responds with HTTP status 200

## Running Tests

To run all integration tests:

```bash
yarn test
```

To run a specific test:

```bash
# Run only sync test
yarn test --testNamePattern="sync"

# Run only build test
yarn test --testNamePattern="build"

# Run only server test
yarn test --testNamePattern="server"
```

## Test Configuration

- **Test Framework**: Jest (JavaScript)
- **Default Timeout**: 10 minutes (600,000ms)
- **Individual Timeouts**: 
  - Sync: 5 minutes
  - Build: 5 minutes
  - Server: 3 minutes
- **Port**: Tests run the server on port 4000
- **Cleanup**: Automatically kills server processes after each test
- **Execution**: Tests run sequentially to avoid port conflicts

## Files

- `__tests__/website.test.js` - Main integration test suite (JavaScript)
- `jest.config.js` - Jest configuration

## Requirements

Make sure you have all dependencies installed:

```bash
yarn install
```

The test requires:
- Jest testing framework
- Axios for HTTP requests (already in dependencies)
- Node.js child_process for running commands
- Access to the root directory's `yarn sync:website` command

## Notes

- Tests use JavaScript instead of TypeScript to avoid compilation complexity
- Tests run sequentially to prevent port conflicts
- Each test has appropriate cleanup to prevent hanging processes
- Make sure port 4000 is available before running tests
- Individual tests can be run separately for faster debugging
- The build step may take several minutes depending on your system
- Running all 3 tests together verifies the complete workflow more efficiently than a single long test 