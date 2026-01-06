'use client';

import { Box } from '@/components/ui/box';
import { Fab, FabIcon } from '@/components/ui/fab';
import { Moon, Sun } from 'lucide-react-native';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggleFab() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Box className="fixed bottom-0 right-0 min-[992px]:hidden ">
      <Fab
        onPress={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
        className="absolute z-10 bottom-8 right-4"
      >
        <FabIcon
          as={resolvedTheme === 'light' ? Moon : Sun}
          className="stroke-typography-200"
        />
      </Fab>
    </Box>
  );
}

