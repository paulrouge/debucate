'use client';
import React, {useEffect} from 'react'
import { useGlobalContext } from '@/utils/context/globalContext';
import { ethers } from 'ethers';

const ShowBalance = () => {
    const { 
        account, 
        balance, 
        setBalance, 
        selectedChainIsIcon,
        chainId,
        provider,
        iconService,
    } = useGlobalContext()
  

    useEffect(() => {
        const getIconBalance = async () => {
            const res = await iconService!.getBalance(account).execute()
            
            setBalance(res.toNumber() / 10 ** 18)
        }
        if (selectedChainIsIcon && account !== '' && iconService) {
            getIconBalance()
        }
    }, [account, selectedChainIsIcon, iconService])

    useEffect(() => {
        const getEVMBalance = async () => {
            const res = await provider!.getBalance(account)
            console.log(ethers.utils.formatEther(res))
            setBalance(Number(ethers.utils.formatEther(res)))
        }

        if (!selectedChainIsIcon && account !== '' && provider !== null) {
            getEVMBalance()
        }
    }, [account, selectedChainIsIcon, provider])



    return (
        <div> Show Balance: {balance} </div>
  )
}

export default ShowBalance