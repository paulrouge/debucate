'use client';
import React, {useEffect} from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
// import { a } from '@react-spring/three';
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'


// this component is rendered first and can be used to set / check session or local storage
// in this example we only set the account. So the user doesn't have to connect his wallet every time he visits the page
// extend on MetaMaskEthereumProvider type

// a helper type to prevent TypeScript errors
type MetaMaskEthereumProvider = {
    request: (args: {method: string }) => Promise<string[]>
}

const FirstRootComponent = () => {
    const { setChainId, setAccount, setProvider, setSigner, account } = useGlobalContext()
    
    // check local storage
    useEffect(() => {
        const _account = localStorage.getItem('account')
        if(_account) setAccount(_account)
    
        // const _chainId = sessionStorage.getItem('chainId')
        // if(_chainId) setChainId(Number(_chainId)) 
    }, [])

    // if there is an account in the local storage we set up the provider and signer
    useEffect(() => {
        const setUpProviderAndSigner = async () => {
            try {
                const provider = await detectEthereumProvider({mustBeMetaMask:false}) as MetaMaskEthereumProvider
                
                if (provider) {
                    const _account = await provider.request({ method: 'eth_requestAccounts' })
                    setAccount(_account[0])

                    const _provider = new ethers.providers.Web3Provider(provider)
                    setProvider(_provider) 
                    const _signer = _provider.getSigner()
                    setSigner(_signer)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if(account !== '') {
            setUpProviderAndSigner()
        }
    }, [account])

    return <></>
}

export default FirstRootComponent