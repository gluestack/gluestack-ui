import React from "react";
import { Box } from "../../components/ui";
import HomestayInformationFold from "./HomestayInformationFold";
import MainContentHeader from "./MainContentHeader";
import NewThisWeekFold from "./NewThisWeekFold";

const MainContent = ({
  modalVisible,
  setModalVisible,
  setActiveTab,
  activeTab,
}: any) => {
  return (
    <Box className="flex-1 md:h-[calc(100vh-144px)] md:pr-16 md:pl-8 overflow-auto">
        {/* explore page main content header */}
        <MainContentHeader
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        {/* explore page new this week fold 1 */}
        <NewThisWeekFold />
        {/* explore page homestay info fold 2 */}
        <HomestayInformationFold />
    </Box>
  );
};
export default MainContent;
