'use client';
import React from 'react'
import { useGlobalContext } from '../../utils/context/globalContext'
import detectEthereumProvider from '@metamask/detect-provider'
import { ethers } from 'ethers'
import SelectChainId from './SelectChainId';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';

type Props = {
    name: string
}

// extend on MetaMaskEthereumProvider type
type MetaMaskEthereumProvider = {
    request: (args: {method: string }) => Promise<string[]>
}

declare const window: any;

const WalletProvider = ({name}: Props) => {
    const { 
        setAccount, 
        setConnectModalOpen, 
        setProvider, 
        setSigner, 
        chainId, 
        selectedChainIsIcon, 
    } = useGlobalContext()



    // switch chain
    const switchChain = async () => {
        if(name === 'Hana'){
            try {
                await window.hanaWallet.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: chainId }],
                });
            } catch (error) {
                console.log(error)
            }
        } else if (name === 'MetaMask') {
            try {
                await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
                });
            } catch (error) {
                console.log(error)
            }
        }
    }

    const handleClick = async () => {        
        if (name === 'MetaMask' && selectedChainIsIcon) return
        if(name === 'MetaMask'){
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

        if (name === 'Hana') {
            try {
                if(window !== undefined) {
                    if(selectedChainIsIcon){
                        const callHana = () => {
                            const customEvent = new CustomEvent('ICONEX_RELAY_REQUEST',  {   
                                detail: { 
                                type: 'REQUEST_ADDRESS'   
                                } 
                            });

                            window.dispatchEvent(customEvent);
                        }
                        callHana()
                        return
                    } else {
                    
                        if (window.hanaWallet !== undefined) {
                            const _account = await window.hanaWallet.ethereum.request({ method: 'eth_requestAccounts' })
                            setAccount(_account[0])
                            const _provider = new ethers.providers.Web3Provider(window.hanaWallet.ethereum,)
                            setProvider(_provider)
                            const _signer = _provider.getSigner()
                            setSigner(_signer)
                        }
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

        switchChain()
        setConnectModalOpen(false)
    }

    return (
    <motion.div 
    whileHover={
        selectedChainIsIcon && name === 'MetaMask'
          ? { scale: 1.0 }
          : { scale: 1.03 }
      }
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.1 }}
    onClick={handleClick} 
    className={`p-4 m-2 bg-customBlue rounded-md 
    flex justify-center items-center text-white z-10 
    ${selectedChainIsIcon && name === 'MetaMask' ? 'opacity-50' : 'cursor-pointer '}
    
    `}
    >
        <Image src={`/media/${name}.png`} width={40} height={40} alt={name} className='mr-4'/>
        {name}
    </motion.div>
)}
        
const ChooseWalletProvider = () => {
    const {setConnectModalOpen} = useGlobalContext()

    return (
    <AnimatePresence >
        <motion.div 
     
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.1 }}
        className='
        fixed top-0 left-0 w-screen h-screen bg-cover 
        bg-center backdrop-blur-sm
        flex justify-center items-center
        font-customFont font-bold text-2xl
        '
        onClick={()=>{setConnectModalOpen(false)}}
        >
            <div className='
            flex flex-col p-10 rounded border 
            bg-gradient-to-r from-blue-500 to-funBlue
            '>
                <div className='py-4 px-2 text-lg z-40'>   
                    <SelectChainId/>
                </div> 
                <div className='flex flex-row'>
                    <WalletProvider name='Hana'/>
                    <WalletProvider name='MetaMask'/>
                </div>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default ChooseWalletProvider