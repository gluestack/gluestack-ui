'use client';

import { Box } from '@/components/ui/box';
import { Fab, FabIcon } from '@/components/ui/fab';
import { Moon, Sun } from 'lucide-react-native';
import { ThemeContext } from '@/utils/context/theme-context';
import { useColorMode } from '@/app/provider';

export default function ThemeToggleFab() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Box className="fixed bottom-0 right-0 min-[992px]:hidden ">
      <Fab
        onPress={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        className="absolute z-10 bottom-8 right-4"
      >
        <FabIcon
          as={colorMode === 'light' ? Moon : Sun}
          className="stroke-typography-200"
        />
      </Fab>
    </Box>
  );
}

