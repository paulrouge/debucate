import React from 'react'
import useBSCDapp from '@/hooks/useBSCDapp'
import { useGlobalContext } from '@/utils/context/globalContext'
import {MINTFEE} from '@/utils/constants/constants'
import useBUSD from '@/hooks/useBUSD'
import Allowance from './busd/Allowance'
const Mint = () => {
    const { allowance } = useBUSD()
    const { account, setTransactionToCheck} = useGlobalContext()
    const { contractSigner } = useBSCDapp()
  
    const handleClick = async () => {
        if (allowance <= 0) {
            return
        }
        
        let options = {
            gasLimit: 1000000,
            // value: 
        }

        const gasLimit = await contractSigner.estimateGas.safeMint(account,options)
        // add a buffer to the gas limit
        const adjustedGasLimit = gasLimit.mul(120).div(100);
        options.gasLimit = adjustedGasLimit

        const tx = await contractSigner.safeMint(account,options)       
        setTransactionToCheck(tx.hash)

    }

    return (
    <div>
        <div className='flex flex-col gap-4 bg-pinkFun mt-6'>
            Mint your NFT here!
        </div>
        <div>Price 10 BUSD</div>
        
        <div 
            onClick={handleClick}
            className={`bg-funYellow text-center rounded text-black mt-4  transition-colors ease-in-out
                ${allowance < 10 ? 'opacity-50 cursor-not-allowed text-gray-500' : 'cursor-pointer hover:bg-white text-black'}`}
            >
            MINT!
        </div>
        <Allowance/>
    </div>
  )
}

export default Mint