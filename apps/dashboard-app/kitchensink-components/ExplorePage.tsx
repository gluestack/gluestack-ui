import React from "react";
import { Box, HStack } from "../components/ui";
import Banner from "./Banner";
import Header from "./Header";
import WebSidebar from "./WebSidebar";
import MainContent from "./main-content/MainContent";
import { ScrollView } from "react-native";

const Explorepage = ({ activeTab, setActiveTab }: any) => {
  return (
    <>
      <Box className={`w-full ${activeTab != "Profile" ? "flex" : "hidden"}`}>
        {/* top banner */}
        <Banner />
        {/* header */}
        <Header />
      </Box>

      {/* mobile */}
      <ScrollView
       className="h-[1px] md:hidden"
       >
        <Box
          className={`${activeTab !== "Profile" ? "flex" : "hidden"} md:hidden`}
        >
          <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </Box>
      </ScrollView>

      {/* web */}
      <HStack className="w-full hidden md:flex flex-1">
        <WebSidebar />
        <ScrollView style={{ flex: 1 }}>
        <MainContent setActiveTab={setActiveTab} activeTab={activeTab} />
        </ScrollView>
      </HStack>
    </>
  );
};

export default Explorepage;
