import { Box } from '@/components/ui/box';
import { Icon, MoonIcon, SunIcon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { useMode } from '@/utils/theme-context';

const ToggleThemeButton = () => {
  const { colorMode, setColorMode } = useMode();
  return (
    <Pressable
      role="button"
      onPress={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
      className="web:focus:shadow-none"
    >
      <Box className={`rounded-full items-center justify-center `}>
        {colorMode === 'dark' ? (
          <Icon
            as={MoonIcon}
            className={'h-[18px] w-[18px] text-typography-500 '}
          />
        ) : (
          <Icon
            as={SunIcon}
            className={' h-[18px] w-[18px] text-typography-500 '}
          />
        )}
      </Box>
    </Pressable>
  );
};

export default ToggleThemeButton;
