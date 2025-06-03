import { useContext } from 'react';
import {
  Pressable,
  SunIcon,
  MoonIcon,
  Icon,
  Fab,
  FabIcon,
} from '@/components/ui';
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
