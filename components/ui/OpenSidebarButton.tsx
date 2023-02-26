'use client';
import React from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';

const OpenSidebarButton = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  
    return (
    <div>
        <ChevronDoubleRightIcon
        className="h-8 w-8 text-gray-200 hover:text-gray-800 fixed top-4 left-4 z-10"
        onClick={() => setIsSidebarOpen(true)}
        />
    </div>
  )
}

export default OpenSidebarButton