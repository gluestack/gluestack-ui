import { Fab, FabIcon } from '@/components/ui/fab';
import { Icon, MoonIcon, SunIcon } from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { PaletteIcon } from 'lucide-react-native';
import { useAppTheme, THEME_BASES } from '@/contexts/app-theme-context';

export const ThemeSwitcher = () => {
  const { themeBase, isDark, setThemeBase, toggleColorMode, currentThemeConfig } =
    useAppTheme();

  return (
    <Menu
      placement="top"
      offset={5}
      disabledKeys={[themeBase]}
      trigger={({ ...triggerProps }) => {
        return (
          <Fab {...triggerProps} className="m-6" size="lg">
            <FabIcon as={PaletteIcon} size="sm" />
          </Fab>
        );
      }}
    >
      {/* Color Mode Toggle */}
      <MenuItem
        key="color-mode"
        textValue="toggle-color-mode"
        onPress={toggleColorMode}
      >
        <Icon as={isDark ? SunIcon : MoonIcon} className="mr-2" />
        <MenuItemLabel>{isDark ? 'Light Mode' : 'Dark Mode'}</MenuItemLabel>
      </MenuItem>

      {/* Theme Options */}
      {THEME_BASES.map((base) => (
        <MenuItem
          key={base}
          textValue={base}
          onPress={() => setThemeBase(base)}
        >
          <MenuItemLabel
            className={themeBase === base ? 'font-bold' : undefined}
          >
            {base.charAt(0).toUpperCase() + base.slice(1)}
          </MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};
