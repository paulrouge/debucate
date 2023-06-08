'use client';
import React, {useEffect} from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
import { a } from '@react-spring/three';


// this component is rendered first and can be used to set / check session or local storage
// in this example we only set the account. So the user doesn't have to connect his wallet every time he visits the page

const FirstRootComponent = () => {
    const { setChainId, setAccount } = useGlobalContext()
    
    // check session storage
    useEffect(() => {
        const _account = sessionStorage.getItem('account')
        if(_account) setAccount(_account)
        
        alert(_account)

        // const _chainId = sessionStorage.getItem('chainId')
        // if(_chainId) setChainId(Number(_chainId))
        
    }, [])

    return <></>
}

export default FirstRootComponent