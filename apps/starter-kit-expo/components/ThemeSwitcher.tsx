import { Fab, FabIcon } from '@/components/ui/fab';
import { Icon, MoonIcon, SettingsIcon, SunIcon } from '@/components/ui/icon';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { Uniwind, useUniwind } from 'uniwind';

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const themes = [
    { name: 'light', label: 'Light', icon: SunIcon },
    { name: 'dark', label: 'Dark', icon: MoonIcon },
    { name: 'system', label: 'System', icon: SettingsIcon },
  ];
  const activeTheme = hasAdaptiveThemes ? 'system' : theme;

  return (
    <Menu
      placement="top left"
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
            Uniwind.setTheme(theme.name as 'light' | 'dark' | 'system')
          }
        >
          <Icon as={theme.icon} size="sm" className="mr-2" />
          <MenuItemLabel size="sm">{theme.label}</MenuItemLabel>
        </MenuItem>
      ))}
    </Menu>
  );
};
