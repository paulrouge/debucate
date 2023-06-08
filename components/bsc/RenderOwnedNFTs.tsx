import React from 'react'
import useBSCDapp from '@/hooks/useBSCDapp'
import NFTCard from './NFTCard'

const RenderOwnedNFTs = () => {
  const { nftsOwned } = useBSCDapp()

  return (
    <div className='flex flex-col gap-4 bg-pinkFun mt-6'>
      <div className='flex flex-col gap-4'>
        {
          nftsOwned.map((nft, index) => {
            return <NFTCard key={index} id={nft} />;
          })
        }
      </div>
    </div>
  )
}

export default RenderOwnedNFTs