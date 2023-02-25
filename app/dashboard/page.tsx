'use client';
import React from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
import CreateNewLottery from '@/components/createNewLottery';



const page = () => {
    const { testValue } = useGlobalContext()
  
    return (
    <div className='flex min-h-screen justify-center items-center flex-col'>
        <div className='text-6xl font-bold p-8'>
            Dashboard - example
        </div>
        <div className='p-8'>
            test value from the globalContext api: <span className='underline'>{testValue}</span>
        </div>
        <CreateNewLottery/>
          
    </div>
  )
}

export default page