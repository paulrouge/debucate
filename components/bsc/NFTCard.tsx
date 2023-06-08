import React from 'react'
import Image from 'next/image'

type NFTCardProps = {
    name: string
    image: string
    description: string
    id: string
}

const NFTCard = (props:NFTCardProps) => {
  
  
    return (
    <div className='bg-funBlue rounded-md border-2 border-white'>
        <div className='flex flex-col gap-4'>
            <div className='text-center text-white text-2xl'>{props.name}</div>
            <div className='text-center text-white text-2xl'>{props.id}</div>
            <div className='text-center text-white text-2xl'>{props.description}</div>
            <div className='text-center text-white text-2xl'>{props.image}</div>
        </div>
    </div>
  )
}

export default NFTCard