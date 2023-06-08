
import React from 'react'
import Mint from './Mint'
import RenderOwnedNFTs from './RenderOwnedNFTs'

const DappContractBSC = () => {

    return (
    <div
    className='flex flex-col items-center justify-center px-6 py-2 bg-funOrange rounded-lg font-mono'>
        <div className='text-2xl py-4 font-bold'>NFT Stuff!</div>
        <div className='flex flex-col gap-2'>
            <div>
                <Mint/>
                <RenderOwnedNFTs />
            </div>
        </div>

    </div>
  )
}

export default DappContractBSC