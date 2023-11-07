import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import { BsBag } from 'react-icons/bs';

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <header className='bg-pink-200'>
      <div className="">Header</div>
      <div className="relative flex cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <BsBag className='text-2xl' />
      </div>
    </header>
  );
};

export default Header;
