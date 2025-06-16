import React from "react";
import { Box } from "../components/ui";
import Sidebar from "./Sidebar";

const WebSidebar = () => {
  return (
    <Box className="flex-1 md:flex md:web:max-h-[calc(100vh-144px)] max-w-[340px] w-full pl-12 hidden">
      {/* common sidebar contents for web and mobile */}
      <Sidebar />
    </Box>
  );
};
export default WebSidebar;
