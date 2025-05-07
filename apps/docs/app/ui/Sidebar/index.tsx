import componentsList from "../../../components-list.json";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className=" w-1/5 p-4 border-r border-gray-200">
      <h1 className="text-xl font-bold">Sidebar</h1>
      <div className="flex flex-col mt-4 gap-2">
        {componentsList.map((component) => (
          <Link
            href={`/ui/docs/components/${component.name}`}
            key={component.name}
            className="text-lg text-gray-500 hover:text-gray-700"
          >
            {component.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
