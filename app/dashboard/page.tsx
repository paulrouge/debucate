'use client';
import React from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
import NFTContractBSC from '@/components/bsc/NFTContractBSC';
import Mint from '@/components/bsc/Mint';

const page = () => {
    const { testValue } = useGlobalContext()
  
    return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
        <div className='text-4xl font-bold p-8 font-mono'>
            Your NFT Dashboard
        </div>
        <NFTContractBSC />   
    </div>
  )
}

export default page