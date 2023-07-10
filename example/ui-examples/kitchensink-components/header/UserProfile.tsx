import React, { useState } from "react";
import { Avatar, Menu, Pressable } from "../../gluestack-ui-components";
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
              <Avatar size="sm" bg="$backgroundLight600">
                <Avatar.FallbackText>Henry Stan</Avatar.FallbackText>
                <Avatar.Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                  }}
                />
                <Avatar.Badge
                  bg="$primary500"
                  sx={{
                    _dark: {
                      borderColor: "$backgroundDark900",
                    },
                  }}
                />
              </Avatar>
            </Pressable>
          );
        }}
      >
        {userMenuItems.map((item) => (
          <Menu.Item key={item.title} textValue={item.title}>
            <Menu.ItemLabel>{item.title}</Menu.ItemLabel>
          </Menu.Item>
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
