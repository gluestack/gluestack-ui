import Sidebar from "@/components/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full  h-full">
      <Sidebar />
      <div className="w-[80vw] flex px-8  h-[calc(100vh-64px)] overflow-y-scroll  py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {children}
      </div>
    </div>
  );
}
