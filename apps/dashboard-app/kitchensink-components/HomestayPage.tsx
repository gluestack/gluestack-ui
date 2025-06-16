import React, { useEffect } from "react";
import { StatusBar, Platform } from "react-native";
import { Box } from "../components/ui";
import MobileBottomTabs from "./MobileBottomTabs";
import MobileModeChangeButton from "./MobileModeChangeButton";
import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";
import MobileProfilePage from "./MobileProfilePage";
import Explorepage from "./ExplorePage";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: SlidersHorizontal,
    label: "Filter",
  },
  {
    icon: Plus,
    label: "Listing",
  },
  {
    icon: MessageCircle,
    label: "Inbox",
    disabled: true,
  },
  {
    icon: User,
    label: "Profile",
  },
];

const HomestayPage = () => {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <Box className="flex-1">
        <StatusBar />

        <Box className="flex-1">
          <MobileProfilePage isActive={activeTab === "Profile"} />

          <Explorepage setActiveTab={setActiveTab} activeTab={activeTab} />

          <MobileModeChangeButton />
        </Box>
        {/* mobile bottom tabs */}
        <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
          <MobileBottomTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};
export default HomestayPage;
