'use client';
import React, { useEffect } from 'react'
import useIconSignTxBuilder from '@/utils/qnect/useIconSignTxBuilder';
import { useGlobalContext } from '../../utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'
import { qEvents } from '@/utils/qnect/qevents'

type Props = {
    to: string,
    method: string,
    params: {},
    value: number,
    stepLimit?: number,
    gasLimit?: number,
    eventToEmit: qEvents,
    buttonName: string
    disabled?: boolean
}

const SignButton = (props: Props) => {
    const { signTx } = useIconSignTxBuilder()
    const { account, selectedChainIsIcon, iconService } = useGlobalContext()
  
    // now only for the ICON chain (if selectedChainIsIcon)
    const handleClick = () => {
      if(account !== '' && selectedChainIsIcon && iconService) {
        signTx(
          props.to, 
          props.method, 
          props.params,
          props.value,
          props.stepLimit!,
          props.eventToEmit
        )
      }
    }
  
    return (
    <div
    onClick={handleClick}
    className='
    w-40 h-10 bg-funBlue text-white rounded-md m-4
    flex justify-center items-center
    cursor-pointer transition ease-in-out duration-500
    '
    > 
        {props.buttonName} 
    </div>
  )
}

export default SignButton