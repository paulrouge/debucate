import React from 'react'
import Mint from './Mint'
import RenderOwnedNFTs from './RenderOwnedNFTs'
import { useGlobalContext } from '@/utils/context/globalContext'

const DappContractBSC = () => {
    const { account } = useGlobalContext()

    return (
    <div
    className='flex flex-col items-center justify-center px-6 py-2 bg-funOrange rounded-lg font-mono'>
        <div className='text-2xl py-4 font-bold'>NFT Stuff!</div>
        <div className='flex flex-col gap-2'>
            { account === '' ?
                <div className='text-xl font-bold'>
                    Connect your wallet to start!
                </div>
                :
                <div>
                    <Mint/>
                    <RenderOwnedNFTs />
                </div>
            }
        </div>
    </div>
  )
}

export default DappContractBSC