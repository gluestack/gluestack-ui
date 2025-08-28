'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/utils/context/theme-context';
import { Widget } from '@typeform/embed-react';

export default function Expert() {
  const { colorMode } = useContext(ThemeContext);

  return (
    <>
      <Widget
        id={colorMode === 'light' ? 'aRuH9GIE' : 's2VB1ZKy'}
        disableScroll
        inlineOnMobile
        className="bg-background-0 pt-[48px] lg:pt-[53px] w-full h-[100vh]"
      />
    </>
  );
}
