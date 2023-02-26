'use client';
import React from 'react'
import { ContractAddresses } from '@/utils/constants/addresses'
import SignButton from './ui/SignButton'
import { useGlobalContext } from '@/utils/context/globalContext'
import { qEvents } from '@/utils/qnect/qevents'

const CreateNewLottery = () => {
    const { chainId, selectedChainIsIcon } = useGlobalContext()
  
    return (
    <div className='font-customFont flex flex-col items-center'>
        <div>
          
        </div>
        {
            selectedChainIsIcon && 
            <SignButton
                to={ContractAddresses[chainId].ICON_lottery_contract!}
                method='createNewLottery'
                params={{
                    _ticketPrice: `0x${Number(1).toString(16)}`,
                    _totalTickets: `0x${Number(100).toString(16)}`,
                }}
                value={2 * 10 ** 18}
                stepLimit={1000000}
                eventToEmit={qEvents.CreatedNewLottery}
                buttonName='Create New Lottery'
            />

        }   

    </div>
  )
}

export default CreateNewLottery