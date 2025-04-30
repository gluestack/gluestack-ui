import Sidebar from "../Sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-4/5  h-[calc(100vh-64px)] overflow-y-scroll px-16 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{children}</div>
    </div>
  );
}
