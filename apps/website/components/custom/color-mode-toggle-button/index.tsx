import { useContext } from 'react';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { ThemeContext } from '@/utils/context/theme-context';

export const ToggleColorModeButton = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  return (
    <div className="fixed bottom-4 right-0">
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      >
        <FabIcon
          as={colorMode === 'dark' ? SunIcon : MoonIcon}
          className="text-typography-300"
        />
      </Fab>
    </div>
  );
};
