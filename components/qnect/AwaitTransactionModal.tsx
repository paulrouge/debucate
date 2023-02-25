'use client';
import React, {useEffect, useState} from 'react'
import { useGlobalContext } from '../../utils/context/globalContext'
import useIconBlockchain from '@/utils/qnect/useIconBlockchain';
import IconService from 'icon-sdk-js/build/IconService';

const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const AwaitTransactionModal = () => {
    const { setTransactionToCheck, transactionToCheck, selectedChainIsIcon, iconService } = useGlobalContext()
    const [countdown, setCountdown] = useState(40)
    const [status, setStatus] = useState("Waiting for transaction to be mined")
    const [dots, setDots] = useState(".")
  
    useEffect(() => {
        const interval = setInterval(() => {
            if(countdown > 0) {
                setCountdown(countdown - 1)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [countdown])

    useEffect(() => {
        setCountdown(20)
    }, [transactionToCheck])

    // evm
    useEffect(() => {
        if (selectedChainIsIcon) return
        const checkTx = async () => {
            const receipt = await transactionToCheck!.txobject
            // cast to any because the type is wrong.
            // the ethers talks of a TransactionResponse-type, can't find it or get it to work
            const _receipt = (receipt as any).wait()
            const txStatus = _receipt.status 
            
            if(txStatus === 1) {
                setStatus("✅ Transaction successful! Closing in 3 seconds")
                
                if(transactionToCheck!.eventToEmit){
                    // use Qnect to run all needed callbacks to update the UI
                    window.dispatchEvent(new CustomEvent(transactionToCheck!.eventToEmit))
                }
            
                setCountdown(3)    
                await sleep(3000)
                
                // this closes the tx modal
                setTransactionToCheck(null)
 
            } else {
                alert("Something went wrong. Check the Snow Tracker.")
            }
        }
        if(transactionToCheck) {
            checkTx()
        }
        // eslint-disable-next-line
    }, [setStatus, setCountdown, setTransactionToCheck])

    // icon
    useEffect(() => {
        if (!selectedChainIsIcon) return
        const checkTx = async () => {
            const hash:string = String(transactionToCheck!.txobject)
            await sleep(3000)

            // try 5 times every 2 seconds
            let tries = 0
            let receipt = null
            
            while(tries < 5) {
                try {
                    receipt = await iconService!.getTransactionResult(hash).execute()
                    if(receipt.status === 1) {
                        break
                    } if (receipt.status === 0) {
                        break
                    }
                
                } catch (e) {
                    console.log(e)
                    await sleep(2000)
                    tries++
                }
            }
            
            
            if (receipt === null) {
                alert("Something went wrong. Check the Tracker.")
                setTransactionToCheck(null)
                return
            }
            const txStatus = receipt!.status

            if(txStatus === 1) {
                setStatus("✅ Transaction successful! Closing in 3 seconds")
                
                if(transactionToCheck!.eventToEmit){
                    // use Qnect to run all needed callbacks to update the UI
                    window.dispatchEvent(new CustomEvent(transactionToCheck!.eventToEmit))
                }
                
                setCountdown(3)    
                await sleep(3000)
                
                // this closes the tx modal
                setTransactionToCheck(null)
 
            } else {
                alert("Something went wrong. Check the Tracker.")
                setTransactionToCheck(null)
            }

        }
        if(transactionToCheck) {
            try{
                checkTx()
            } catch (e) {
                console.log(e)
            }
        }
        // eslint-disable-next-line
    }, [setStatus, setCountdown, setTransactionToCheck])

    useEffect(() => {
        // function that adds a dot every 300ms up to three dots and then resets to one dot
        const interval = setInterval(() => {
            if(dots.length < 3) {
                setDots(dots + ".")
            } else {
                setDots("")
            }
        }, 500)
        return () => clearInterval(interval)
    }, [dots])

    return (
    <div className='fixed top-0 left-0 backdrop-blur-sm
    w-screen h-screen z-50 flex justify-center items-center'
    >
        <div className='bg-funOrange md:w-3/5 w-11/12 rounded md:p-12 p-2 border-8 border-white' >
            <div className='font-bold md:text-3xl text-xl text-white'>
            {status}{dots}
            {/* place holder blabl status is peniding or success */}
            </div>
            <div className='mt-2 font-bold text-xl text-white'>
                estimated time: {countdown} seconds
                {/* estimated time: 50 seconds */}
            </div>
            <div className='mt-2 font-bold text-xl text-white'>
                {/* doesnt really fit... */}
                {/* tx hash: {transactionToCheck.hash} */}
                {/* tx hash: dummyhash1234567890ummyhash1234567890ummyhash234567 */}
            </div>
        </div>
    </div>
  )
}

export default AwaitTransactionModal