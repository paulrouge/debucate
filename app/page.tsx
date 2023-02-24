
'use client';
import {useEffect} from 'react'
import styles from "./page.module.css";
import { useGlobalContext } from "@/utils/context/globalContext";
import { formatAddress } from "@/utils/qnect/formatAddress";
import { motion, AnimatePresence } from "framer-motion";
import ShowBalance from '@/components/ui/ShowBalance';

export default function Home() {
  const { testValue, account, selectedChainIsIcon } = useGlobalContext()


  return (
    <div className={`
    w-full font-customFont bg-funBlue 
    ${selectedChainIsIcon ? ' bg-funBlue' : 'bg-funRed'} 
    `}>
      <main className='
      flex justify-center 
      items-center m-auto min-h-screen flex-col
      md:w-1/2 w-11/12 pt-20
      '>
        <div className='md:text-8xl text-5xl font-bold'>
          Start Building
        </div>
        <div className='text-2xl my-10 font-bold'>
          This is a Tailwind Example with Next.js 13 & qNect
        </div>
        <div className='md:text-xl text-lg'>
          <div className='list-disc list-inside'>
            <div className='my-4'>👉🏼 Global states are handled by the GlobalContextProvider. 
              If you want to add/edit values and functions
              that need to be globally available you should do this as /utils/context/globalContext.tsx </div>
            <div className='my-4'>👉🏼 qNect is loaded on the background on every page by using the layout.tsx file at root.</div>
          </div>
        </div>
        
        <div className='my-4 md:w-3/5 md-11/12 h-48'>
          
          <div className='
          mt-4 flex items-center flex flex-col h-16 w-full
          bg-gray-100 text-gray-700 font-mono p-2 rounded-md'
          >
            <div>
              🌐 GlobalContext API: 
            </div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
            <div>
              {testValue}
            </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className='
          mt-4 flex items-center flex flex-col h-16 w-full
          bg-gray-100 text-gray-700 font-mono p-2 rounded-md'>
            <div>
              🔐 Connected wallet:
            </div>
            <AnimatePresence>
              <motion.div
                key={account}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                {account !== '' ? formatAddress(account) : 'Not connected'}
              </motion.div>
            </AnimatePresence>
           
            <div className='
            mt-4 flex items-center flex flex-col h-16 w-full
            bg-gray-100 text-gray-700 font-mono p-2 rounded-md'
            >  
           <AnimatePresence>
              <motion.div
                key={account}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <ShowBalance/><></>
              </motion.div>
            </AnimatePresence>
            </div>
            
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
