'use client';
import { Button } from '@/components/web/button';
import { useMode } from '@/utils/theme-context';
import { Moon, Sun } from 'lucide-react';

const ToggleThemeButton = () => {
  const { colorMode, setColorMode } = useMode();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
      className="rounded-full"
    >
      {colorMode === 'dark' ? (
        <Moon className="h-[18px] w-[18px] text-muted-foreground" />
      ) : (
        <Sun className="h-[18px] w-[18px] text-muted-foreground" />
      )}
    </Button>
  );
};

export default ToggleThemeButton;
