'use client';
import Header from '@/components/page-components/header';
import { useState } from 'react';

export default function HeaderWithSidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <Header
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
    </>
  );
}
