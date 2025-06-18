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
});
