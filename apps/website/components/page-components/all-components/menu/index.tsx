import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Menu } from '@/components/ui/menu';
import { MenuItem } from '@/components/ui/menu';
import { MenuItemLabel } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { AddIcon } from '@/components/ui/icon';
import { GlobeIcon } from '@/components/ui/icon';
import { PlayIcon } from '@/components/ui/icon';
import { SettingsIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Menu
      placement="{{placement}}"
      offset={5}
      disabledKeys={["Settings"]}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Menu</ButtonText>
          </Button>
        )
      }}
    >
      <MenuItem key="Add account" textValue="Add account">
        <Icon as={AddIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Add account</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Community" textValue="Community">
        <Icon as={GlobeIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Community</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Plugins" textValue="Plugins">
        <Icon as={PlayIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Plugins</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Settings" textValue="Settings">
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Settings</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}`}
      argTypes={{
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top",
      "bottom",
      "left",
      "right",
      "top start",
      "top end",
      "bottom start",
      "bottom end",
      "left start",
      "left end",
      "right start",
      "right end"
    ],
    "defaultValue": "top"
  }
}}
      reactLive={{ Menu, MenuItem, MenuItemLabel, Button, ButtonText, Icon, AddIcon, GlobeIcon, PlayIcon, SettingsIcon }}
      title={}
      description={}
    />
  );
}