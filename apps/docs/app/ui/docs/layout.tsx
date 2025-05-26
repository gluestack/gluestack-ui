import Header from "@/components/custom/header";
import Sidebar from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full  h-full flex-1 flex-col">
      <Header />
      <div className="flex w-full h-full flex-1">
        <Sidebar />
        <div className="h-[94vh] overflow-hidden flex-1 w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-6">
          {children}
        </div>
      </div>
    </div>
  );
}
