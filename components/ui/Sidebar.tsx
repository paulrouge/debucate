'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useGlobalContext } from '@/utils/context/globalContext';

const menuItems = [
    {
        name: 'Home',
        link: '#',
    },
    {
        name: 'Dashboard',
        link: '/dashboard',
    },

]

const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <motion.aside
    className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-20 p-4"
    initial={{ x: '-100%' }}
    animate={{ x: isSidebarOpen ? 0 : '-100%' }}
    transition={{ duration: 0.3 }}
  >
    <button
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      onClick={handleClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <div className="
    flex flex-col justify-center items-center pt-8
    ">
        {menuItems.map((item, index) => (
            <div
            key={index}
            className="
            flex flex-col justify-center items-center text-black w-full
            font-customFont font-bold text-2xl py-4 hover:bg-gray-200
            ">
                <Link href={item.link}>{item.name}</Link>
            </div>
        ))
        }
    </div>
  </motion.aside>
  );
};

export default Sidebar;
