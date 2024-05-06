'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function DynamicWidthInput({
  onChange,
  value,
  className,
}: {
  onChange: any;
  value: any;
  className: any;
}) {
  const [width, setWidth] = useState(value.length);

  const changeHandler = (evt: { target: { value: string | any[] } }) => {
    onChange(evt.target.value);
    setWidth(evt.target.value.length);
  };

  useEffect(() => {
    setWidth(value.length);
  }, [value]);
  return (
    <input
      className={`${className} w-[${width}+1 ch]`}
      value={value}
      style={{
        width: width + 1 + 'ch',
        padding: '0px 2px',
        textAlign: 'center',
        color: 'white',
        boxShadow: 'none',
      }}
      type="text"
      autoFocus
      onChange={changeHandler}
    />
  );

  // const [textVal, setTextVal] = useState(value);
  // const buttonRef = useRef<HTMLButtonElement>(null);
  // const cursorPos = useRef<number | null>(null);

  // useEffect(() => {
  //   setTextVal(value || " ");
  // }, [value]);

  // useEffect(() => {
  //   if (buttonRef.current && cursorPos.current !== null) {
  //     const selection = window.getSelection();
  //     if (selection) {
  //       const range = document.createRange();
  //       const childNode = buttonRef.current.firstChild as Text;
  //       if (childNode && cursorPos.current >= 0 && cursorPos.current <= childNode.length) {
  //         range.setStart(childNode, cursorPos.current);
  //         range.collapse(true);
  //         selection.removeAllRanges();
  //         selection.addRange(range);
  //       }
  //     }
  //   }
  // }, [textVal]); // Reset cursor position after content update

  // const handleInput = (e: React.FormEvent<HTMLButtonElement>) => {
  //   const text = e.currentTarget.textContent || "";
  //   const selection = window.getSelection();
  //   if (selection) {
  //     cursorPos.current = selection.focusOffset;
  //   }
  //   setTextVal(text || " ");
  //   onChange(text.trim() || " ");
  // };

  // return (
  //   <button
  //     ref={buttonRef}
  //     className={className}
  //     contentEditable={true}
  //     suppressContentEditableWarning={true}
  //     onInput={handleInput}
  //     dangerouslySetInnerHTML={{ __html: textVal }}
  //   />
  // );
}
