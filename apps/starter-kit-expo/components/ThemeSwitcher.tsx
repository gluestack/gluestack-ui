import { Fab, FabIcon } from '@/components/ui/fab';
import { Icon, MoonIcon, SettingsIcon, SunIcon } from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Uniwind, useUniwind } from 'uniwind';

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const themes = [
    { name: 'light', label: 'Light', icon: SunIcon },
    { name: 'dark', label: 'Dark', icon: MoonIcon },
    { name: 'system', label: 'System', icon: SettingsIcon },
  ];
  const activeTheme = hasAdaptiveThemes ? 'system' : theme;

  const handleThemeChange = async (themeName: 'light' | 'dark' | 'system') => {
    try {
      // Save theme to AsyncStorage
      await AsyncStorage.setItem('app-theme', themeName);
      // Apply theme
      Uniwind.setTheme(themeName);
    } catch (error) {
      console.error('Failed to save theme:', error);
      // Still apply theme even if storage fails
      Uniwind.setTheme(themeName);
    }
  };

  return (
    <Menu
      placement="top"
      offset={5}
      disabledKeys={[`${activeTheme}`]}
      trigger={({ ...triggerProps }) => {
        return (
          <Fab {...triggerProps} className="m-6" size="lg">
            <FabIcon
              as={
                activeTheme === 'light'
                  ? SunIcon
                  : activeTheme === 'dark'
                    ? MoonIcon
                    : SettingsIcon
              }
              size="sm"
            />
          </Fab>
        );
      }}
    >
      {themes.map((theme) => (
        <MenuItem
          key={theme.name}
          textValue={`${theme.name}`}
          onPress={() =>
            handleThemeChange(theme.name as 'light' | 'dark' | 'system')
          }
        >
          <Icon as={theme.icon} className="mr-2" />
          <MenuItemLabel>{theme.label}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};
