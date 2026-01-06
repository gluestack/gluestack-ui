import { useEffect, useState } from 'react';
import { Fab, FabIcon } from '@/components/ui/fab';
import { MoonIcon, SunIcon } from '@/components/ui/icon';
import { useTheme } from 'next-themes';

export const ToggleColorModeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-0">
      <Fab
        size="md"
        placement="bottom right"
        isHovered={false}
        isDisabled={false}
        isPressed={false}
        onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        <FabIcon
          as={resolvedTheme === 'dark' ? SunIcon : MoonIcon}
          className="text-typography-300"
        />
      </Fab>
    </div>
  );
};
