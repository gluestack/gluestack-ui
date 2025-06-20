import { main } from '../src/index';

describe('create-gluestack', () => {
  it('should display help when --help is passed', async () => {
    const args = ['--help'];
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => { throw new Error('process.exit called'); });
    
    try {
      await main(args);
    } catch (error) {
      expect(error).toEqual(new Error('process.exit called'));
    }

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Usage: create-gluestack'));
    expect(exitSpy).toHaveBeenCalledWith(0);
    
    consoleSpy.mockRestore();
    exitSpy.mockRestore();
  });

  it('should clone a Next.js app when --next-app-router is passed', async () => {
    jest.setTimeout(300000);
    const args = ['test-next-app', '--next-app-router'];
    
    // Mock all utility functions
    const cloneProjectSpy = jest.spyOn(require('../src/utils'), 'cloneProject').mockImplementation(() => Promise.resolve());
    const installDependenciesSpy = jest.spyOn(require('../src/utils'), 'installDependencies').mockImplementation(() => Promise.resolve());
    const gitInitSpy = jest.spyOn(require('../src/utils'), 'gitInit').mockImplementation(() => Promise.resolve());
    
    // Mock console.log to prevent output during testing
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    await main(args);

    expect(cloneProjectSpy).toHaveBeenCalledWith('test-next-app', 'next-app-router');
    expect(installDependenciesSpy).toHaveBeenCalledWith('test-next-app', expect.any(String));
    expect(gitInitSpy).toHaveBeenCalledWith('test-next-app');
    
    cloneProjectSpy.mockRestore();
    installDependenciesSpy.mockRestore();
    gitInitSpy.mockRestore();
    consoleSpy.mockRestore();
  });

  it('should clone an Expo app when --expo-router is passed', async () => {
    jest.setTimeout(300000);
    const args = ['test-expo-app', '--expo-router'];
    
    // Mock all utility functions
    const cloneProjectSpy = jest.spyOn(require('../src/utils'), 'cloneProject').mockImplementation(() => Promise.resolve());
    const installDependenciesSpy = jest.spyOn(require('../src/utils'), 'installDependencies').mockImplementation(() => Promise.resolve());
    const gitInitSpy = jest.spyOn(require('../src/utils'), 'gitInit').mockImplementation(() => Promise.resolve());
    
    // Mock console.log to prevent output during testing
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    await main(args);

    expect(cloneProjectSpy).toHaveBeenCalledWith('test-expo-app', 'expo-router');
    expect(installDependenciesSpy).toHaveBeenCalledWith('test-expo-app', expect.any(String));
    expect(gitInitSpy).toHaveBeenCalledWith('test-expo-app');
    
    cloneProjectSpy.mockRestore();
    installDependenciesSpy.mockRestore();
    gitInitSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
