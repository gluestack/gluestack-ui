import React from "react";
import {
  Actionsheet,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetBackdrop,
  ActionsheetContent,
} from "../components/ui";
import Sidebar from "./Sidebar";

const MobileSidebarActionsheet = ({
  actionsheetVisible,
  setActionsheetVisible,
}: any) => {
  const handleClose = () => {
    setActionsheetVisible(false);
  };
  return (
    <Actionsheet
      isOpen={actionsheetVisible}
      onClose={handleClose}
      snapPoints={[80]}  
    >
      <ActionsheetBackdrop />
      <ActionsheetContent className="w-full ios:pb-20 android:pb-10">  
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <Sidebar />
      </ActionsheetContent>
    </Actionsheet>
  );
};
export default MobileSidebarActionsheet;
