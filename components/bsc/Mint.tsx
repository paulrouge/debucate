import React, {useEffect, useState} from 'react'
import useBSCDapp from '@/hooks/useBSCDapp'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'
import { ethers } from 'ethers'
import {MINTFEE} from '@/utils/constants/constants'

const Mint = () => {
    const { account,provider, setTransactionToCheck} = useGlobalContext()
    const { erc20Reader, contractSigner } = useBSCDapp()
    const [balance, setBalance] = useState(0)
  
    useEffect(() => {
        const getBalance = async () => {
            const _balance = await erc20Reader.balanceOf(account)
            setBalance(Number(_balance) / 10 ** 18)
        }
        
        if (account !== "" && erc20Reader) {
            getBalance()
        }
    }, [account, erc20Reader, provider])

    const handleClick = async () => {
        let options = {
            gasLimit: 1000000,
            value: MINTFEE
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
        <div>Price 0.1 BNB</div>
        <div>Balance: {balance} BUSD</div>
        <div 
            onClick={handleClick}
            className='
            bg-funYellow text-center rounded text-black 
            cursor-pointer mt-4 hover:bg-white transition-colors ease-in-out'>
            MINT!
        </div>
    </div>
  )
}

export default Mint