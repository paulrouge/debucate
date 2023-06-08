'use client';
import { useGlobalContext } from '../../utils/context/globalContext';
import { motion } from "framer-motion"


export default function QNectButton() {
    const { setConnectModalOpen } = useGlobalContext();
  
    return (
    <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.04 }}
    className='
    border border-gray-300 z-40
    fixed top-4 right-4 font-bold px-2 py-1
    bg-blue-500 text-white flex justify-center 
    items-center rounded-xl cursor-pointer
    '
    onClick={()=>setConnectModalOpen(true)}
    >
        Connect
    </motion.div>
    );
}