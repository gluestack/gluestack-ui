'use client';

import { Highlight, themes } from 'prism-react-renderer';

export default function CodeView({ code, language = 'tsx' }: { code: string; language?: string }) {
  return (
    <Highlight code={code.trimEnd()} language={language} theme={themes.oneDark}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="overflow-x-auto bg-transparent p-5 font-mono text-[12.5px] leading-[1.7]">
          {tokens.map((line, i) => {
            const { key: _lk, ...lineProps } = getLineProps({ line, key: i }) as { key?: unknown };
            return (
              <div key={i} {...lineProps} className="table-row">
                <span className="table-cell select-none pr-5 text-right text-neutral-600">{i + 1}</span>
                <span className="table-cell">
                  {line.map((token, k) => {
                    const { key: _tk, ...tokenProps } = getTokenProps({ token, key: k }) as { key?: unknown };
                    return <span key={k} {...tokenProps} />;
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
