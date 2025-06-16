import React, { useState } from "react";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
  Pressable,
  Menu,
  MenuItem,
  MenuItemLabel,
} from "../../components/ui";
import LogoutAlertDialog from "../LogoutAlertDialog";

const userMenuItems = [
  {
    title: "Messages",
  },
  {
    title: "Notifications",
  },
  {
    title: "Trips",
  },
  {
    title: "Wishlists",
  },
  {
    title: "Post your home",
  },
  {
    title: "Host an experience",
  },
  {
    title: "Accounts",
  },
  {
    title: "Help",
  },
  {
    title: "Log out",
  },
];
const UserProfile = () => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] = useState(false);
  return (
    <>
      <Menu
        offset={10}
        placement="bottom right"
        selectionMode="single"
        // @ts-ignore
        onSelectionChange={(e: any) => {
          if (e.currentKey === "Log out") {
            setOpenLogoutAlertDialog(true);
          }
        }}
        trigger={({ ...triggerProps }) => {
          return (
            <Pressable {...triggerProps}>
              <Avatar size="sm">
                <AvatarFallbackText>Henry Stan</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  }}
                />
                <AvatarBadge className="bg-primary-500 border-background-0" />
              </Avatar>
            </Pressable>
          );
        }}
      >
        {userMenuItems.map((item) => (
          <MenuItem key={item.title} textValue={item.title}>
            <MenuItemLabel>{item.title}</MenuItemLabel>
          </MenuItem>
        ))}
      </Menu>
      <LogoutAlertDialog
        openLogoutAlertDialog={openLogoutAlertDialog}
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
      />
    </>
  );
};

export default UserProfile;
