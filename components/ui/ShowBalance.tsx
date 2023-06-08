'use client';
import React, {useEffect} from 'react'
import { useGlobalContext } from '@/utils/context/globalContext';
import { ethers } from 'ethers';

const ShowBalance = () => {
    const { 
        account, 
        balance, 
        setBalance, 
        provider,
    } = useGlobalContext()
  


    useEffect(() => {
        const getEVMBalance = async () => {
            const res = await provider!.getBalance(account)
            // console.log(ethers.utils.formatEther(res))
            setBalance(Number(ethers.utils.formatEther(res)))
        }

        if (account !== '' && provider !== null) {
            getEVMBalance()
        }
    }, [account, provider])



    return (
        <div> Show Balance: {balance} </div>
  )
}

export default ShowBalance