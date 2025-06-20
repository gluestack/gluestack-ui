import React from 'react';

export function ProgressGraph({ data }: { data: any }) {
  const colorMap: any = {
    'gluestack-ui v1': '#0077E6',
    'React Native': '#61dafb',
    'gluestack-ui v2': '#eab308',
  };

  const maxValue = Math.max(...Object.values(data).map((stat: any) => stat));

  return (
    <div className="flex flex-col space-y-2 pl-12 pr-4 py-12 bg-[#fbfbfb] dark:bg-gray-800 rounded-md mb-8">
      {Object.keys(data).map((key) => {
        const width = `${Math.round((data[key] / maxValue) * 100)}%`;

        return (
          <div key={key} className="flex w-full space-x-4 items-center">
            <div>
              <p
                className={`w-[130px] text-sm text-right text-gray-900 dark:text-gray-50 whitespace-nowrap
                  ${key === 'gluestack-ui' ? 'font-semibold' : 'font-normal'}`}
              >
                {key}
              </p>
            </div>
            <div className="flex space-x-4 items-center flex-[0.7]">
              <div
                className="h-5 rounded-sm"
                style={{
                  backgroundColor: colorMap[key] ?? '#06b6d4',
                  width,
                }}
              />
              <p className="text-xs flex-1 text-gray-900 dark:text-gray-50 whitespace-nowrap">
                {data[key]} ms
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
