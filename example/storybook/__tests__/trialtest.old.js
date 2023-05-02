import mock from 'mock-fs';

const fs = require('fs');
const path = require('path');
// const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
// const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
// const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

describe('main_function', () => {
  it('test_happy_path_dependencies_and_keywords', () => {
    const main_function = require('./main_function.js');
    const readFileSyncMock = fs.readFileSync;
    const writeFileSyncMock = fs.writeFileSync;

    // Test that the function reads the file correctly.
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component2', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component2', 'config.json'),
      '{"dependencies":{"react":"^17.0.2"},"keywords":["ui","component"]}'
    );
  });

  // Tests that the function does not throw an error when the ui-components folder is empty.
});

describe('main_function', () => {
  beforeEach(() => {
    const fakeFS = {
      config: JSON.stringify({
        test_key: 'test_value',
      }),
    };

    // Mock the file system.
    mock(fakeFS);

    // Clear the cache to reload the module in each test.
    jest.resetModules();
  });

  afterEach(() => {
    mock.restore();
  });

  describe('test_happy_path_file_exists', () => {
    it('should read the contents of the config.json file when it exists', () => {
      const main_function = require('./main_function.js');

      // Test the readFileSync method.
      expect(main_function.readConfigFile()).toEqual({
        test_key: 'test_value',
      });
    });
  });
});
describe('main_function', () => {
  // Tests that the function reads the contents of the config.json file when it exists.
  it('test_happy_path_file_exists', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    readdirSyncMock.mockReturnValueOnce(['component1']);
    readFileSyncMock.mockReturnValueOnce(
      '{"dependencies": {"react": "^17.0.2"}, "keywords": ["ui", "component"]}'
    );

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component1', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component1', 'config.json'),
      '{"dependencies":{"react":"^17.0.2"},"keywords":["ui","component"]}'
    );
  });

  // Tests that the function creates a new object with dependencies and keywords properties when the config.json file contains valid JSON data.
  it('test_happy_path_valid_json', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    readdirSyncMock.mockReturnValueOnce(['component2']);
    readFileSyncMock.mockReturnValueOnce(
      '{"dependencies": {"react": "^17.0.2"}, "keywords": ["ui", "component"]}'
    );

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component2', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component2', 'config.json'),
      '{"dependencies":{"react":"^17.0.2"},"keywords":["ui","component"]}'
    );
  });

  // Tests that the function does not throw an error when the ui-components folder is empty.
  it('test_edge_case_empty_folder', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');

    readdirSyncMock.mockReturnValueOnce([]);

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
  });

  // Tests that the function does not overwrite the config.json file when it is missing dependencies or keywords properties.
  it('test_edge_case_missing_properties', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    readdirSyncMock.mockReturnValueOnce(['component3']);
    readFileSyncMock.mockReturnValueOnce('{"name": "component3"}');

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component3', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).not.toHaveBeenCalled();
  });

  // Tests that the function overwrites the config.json file with the new object when the config.json file contains dependencies and keywords properties.
  it('test_happy_path_dependencies_and_keywords', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    readdirSyncMock.mockReturnValueOnce(['component4']);
    readFileSyncMock.mockReturnValueOnce(
      '{"dependencies": {"react": "^17.0.2"}, "keywords": ["ui", "component"]}'
    );

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component4', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component4', 'config.json'),
      '{"dependencies":{"react":"^17.0.2"},"keywords":["ui","component"]}'
    );
  });

  // Tests that the function does not throw an error when the config.json file contains invalid JSON data.
  it('test_edge_case_invalid_json', () => {
    const readdirSyncMock = jest.spyOn(fs, 'readdirSync');
    const readFileSyncMock = jest.spyOn(fs, 'readFileSync');
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    readdirSyncMock.mockReturnValueOnce(['component5']);
    readFileSyncMock.mockReturnValueOnce(
      '{"dependencies": {"react": "^17.0.2", "keywords": ["ui", "component"]}'
    );

    main();

    expect(readdirSyncMock).toHaveBeenCalledWith(componentPath);
    expect(readFileSyncMock).toHaveBeenCalledWith(
      path.join(__dirname, '../ui-components', 'component5', 'config.json'),
      { encoding: 'utf8' }
    );
    expect(writeFileSyncMock).not.toHaveBeenCalled();
  });
});
