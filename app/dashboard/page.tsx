'use client';
import React from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'


const page = () => {
    const { testValue } = useGlobalContext()
  
    return (
    <div>
        <div className='text-4xl font-bold'>
            Dashboard - example
        </div>
        <div className='mt-8'>
            test value from the globalContext api: <span className='underline'>{testValue}</span>
        </div>
    </div>
  )
}

export default page