import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

const Sidebar = () => {
  const { isSidebarOpen, handleClose } = useContext(SidebarContext);

  return (
    <aside className={`${isSidebarOpen ? 'right-0' : '-right-full'} fixed top-0 w-full h-full bg-white shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold uppercase">Shopping Bag(0)</div>
        <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
          <IoMdArrowForward className='text-2xl' onClick={handleClose} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
