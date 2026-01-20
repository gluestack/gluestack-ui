import { useColorMode } from '@/app/provider';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';

export const ToggleColorModeButton = () => {
  const { colorMode, setColorMode } = useColorMode();
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
        />
      </Fab>
    </div>
  );
};
