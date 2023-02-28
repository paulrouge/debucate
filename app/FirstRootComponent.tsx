'use client';
import React, {useEffect} from 'react'
// import { useGlobalContext } from '@/utils/context/globalContext'


const FirstRootComponent = () => {
    // const { setChainId, setAccount, setSelectedChainIsIcon } = useGlobalContext()
    
    // check session storage
    useEffect(() => {
        // const _chainId = sessionStorage.getItem('chainId')
        // const _account = sessionStorage.getItem('account')
        // const _selectedChainIsIcon = sessionStorage.getItem('selectedChainIsIcon')

        // if(_chainId) setChainId(Number(_chainId))
        // if(_account) setAccount(_account)
        // if(_selectedChainIsIcon) setSelectedChainIsIcon(_selectedChainIsIcon === 'true')
    }, [])

    return <></>
}

export default FirstRootComponent