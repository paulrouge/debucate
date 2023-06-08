
import React, {useEffect, useState} from 'react'
import useBSCDapp from '@/hooks/useBSCDapp'
import { ContractAddresses } from '@/utils/constants/addresses'
import Mint from './Mint'



const DappContractBSC = () => {
   

    // const [xCallCallCount, setXCallCallCount] = useState(0)
    // const [xCallCallerAddresses, setXCallCallerAddresses] = useState<string[]>([])    

    // useEffect(() => {
    //     const getXCallCallCount = async () => {
    //         const callCount = await contractReader.getXCallCount()
    //         setXCallCallCount(Number(callCount))
    //     }

    //     if (contractReader) {
    //         getXCallCallCount()
    //     }

    //     console.log(contractReader, 'contractReader')

    // }, [contractReader, provider])
    
    // useEffect(() => {
    //     const _arr:string[] = []
        
    //     const getXCallCallerAddresses = async () => {
    //         for (let i = 0; i < xCallCallCount; i++) {
    //             const callerAddress = await contractReader.xCallCalls(i)
    //             _arr[i] = callerAddress
    //         }

    //         setXCallCallerAddresses(_arr)
    //     }

    //     if (xCallCallCount > 0) {
    //         getXCallCallerAddresses()
    //     }

    // }, [contractReader, xCallCallCount])

    // useEffect(() => {
    //     console.log(xCallCallerAddresses, 'xCallCallerAddresses')
    // }, [xCallCallerAddresses])


    return (
    <div
    className='flex flex-col items-center justify-center px-6 py-2 bg-funOrange rounded-lg font-mono'
    >
        <div className='text-2xl py-4 font-bold'>NFT Stuff!</div>
        <div className='flex flex-col gap-2'>
            <div>
                {/* <div className='text-xl uppercase'>Address:</div>
                <div>{ContractAddresses[97].NFT_contract}</div> */}
                <Mint />
            </div>
        </div>

    </div>
  )
}

export default DappContractBSC