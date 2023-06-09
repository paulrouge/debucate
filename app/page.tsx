
'use client';
import styles from "./page.module.css";
import { useGlobalContext } from "@/utils/context/globalContext";
import { formatAddress } from "@/utils/qnect/formatAddress";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { testValue, account } = useGlobalContext()
  
  return (
    <div className={`w-full text-white font-customFont transition ease-in-out duration-500 ${account === '' ? 'bg-funRed' : 'bg-funBlue'}`}>
      <main className='flex justify-center items-center m-auto min-h-screen flex-col md:w-1/2 w-11/12'>
        <div className='md:text-7xl text-5xl font-black'>
          This is my Decubate Assignment 
        </div>
        <div className='text-2xl mt-10 font-bold'>
          I used a Next.js template that I built that includes Typescript, TailwindCSS, Ethers.js, and some other stuff.
        </div>
        
        <div className='flex items-center flex flex-col w-full mt-6 text-xl px-4 py-2'>
        { account === '' ?
          <div>
            Connect your wallet to start!
          </div>
          :
          <div>
            <Link 
            className='border rounded-md p-2 hover:bg-gray-100 hover:text-gray-700 font-mono'
            href='/dashboard'>

                Go to dashboard

            </Link>
          </div>
        }

        </div>
        <div className='my-0 md:w-3/5 md-11/12 h-48'>
          
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
          </div>
          
          {/* 
          At the moment the balance is not updating when the account is coming from local storage.
          Decided to leave it like this for now, because it's not a big deal.
          */}
          
          {/* <div className='
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
            </div> */}
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
