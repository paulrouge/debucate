'use client';

import React, {useState} from 'react';
import { ethers } from 'ethers';



export type globalContextValueType = {
    
    // qNect template values
    testValue: string,
    account: string,
    setAccount: React.Dispatch<React.SetStateAction<string>>,
    balance: number,
    setBalance: React.Dispatch<React.SetStateAction<number>>,
    chainId: number,
    setChainId: React.Dispatch<React.SetStateAction<number>>,
    provider: ethers.providers.Web3Provider | null,
    setProvider: React.Dispatch<React.SetStateAction<ethers.providers.Web3Provider|null>>,
    signer: ethers.Signer | null,
    setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | null>>,
    globalLoading: boolean,
    setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>,
    transactionToCheck: string | null,
    setTransactionToCheck: React.Dispatch<React.SetStateAction<string| null>>,
    connectModalOpen: boolean,
    setConnectModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSidebarOpen: boolean,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    
    // project specific state values

}

export const GlobalContext = React.createContext<globalContextValueType | null>(null)


export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    
    // qNect template values
    const [account, setAccount] = useState<string>('')
    const [balance, setBalance] = useState<number>(0)
    const [chainId, setChainId] = useState<number>(97) // 553: Arctic Test, 553: Snow Main
    const [provider, setProvider] = useState<ethers.providers.Web3Provider|null>(null)
    const [signer, setSigner] = useState<ethers.Signer|null>(null)
    const [globalLoading, setGlobalLoading] = useState<boolean>(false)
    const [transactionToCheck, setTransactionToCheck] = useState<string|null>(null)
    const [connectModalOpen, setConnectModalOpen] = useState<boolean>(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    // project specific state value
    
    const value: globalContextValueType = {  
        // qNect template values
        testValue: "test value from global context",
        account,
        setAccount,
        balance,
        setBalance,
        chainId,
        setChainId,
        provider,
        setProvider,
        signer,
        setSigner,
        globalLoading,
        setGlobalLoading: setGlobalLoading,
        transactionToCheck: transactionToCheck,
        setTransactionToCheck: setTransactionToCheck,
        connectModalOpen: connectModalOpen,
        setConnectModalOpen: setConnectModalOpen,
        isSidebarOpen: isSidebarOpen,
        setIsSidebarOpen: setIsSidebarOpen,

        // project specific state values
    
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}  
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => React.useContext(GlobalContext)!;
