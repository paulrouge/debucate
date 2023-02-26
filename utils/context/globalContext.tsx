'use client';

import React, {useState} from 'react';
import { ethers } from 'ethers';
import { qTransactionChecker } from '../qnect/qtypes';
import IconService from 'icon-sdk-js/build/IconService';

export type globalContextValueType = {
    
    // qNect template values
    testValue: string,
    account: string,
    setAccount: React.Dispatch<React.SetStateAction<string>>,
    balance: number,
    setBalance: React.Dispatch<React.SetStateAction<number>>,
    chainId: number,
    setChainId: React.Dispatch<React.SetStateAction<number>>,
    selectedChainIsIcon: boolean,
    setSelectedChainIsIcon: React.Dispatch<React.SetStateAction<boolean>>,
    iconService: IconService | null,
    setIconService: React.Dispatch<React.SetStateAction<IconService | null>>,
    provider: ethers.providers.Web3Provider | null,
    setProvider: React.Dispatch<React.SetStateAction<ethers.providers.Web3Provider|null>>,
    signer: ethers.Signer | null,
    setSigner: React.Dispatch<React.SetStateAction<ethers.Signer | null>>,
    globalLoading: boolean,
    setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>,
    transactionToCheck: qTransactionChecker | null,
    setTransactionToCheck: React.Dispatch<React.SetStateAction<qTransactionChecker| null>>,
    connectModalOpen: boolean,
    setConnectModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSidebarOpen: boolean,
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
    // project specific state values
    lotteryId: number,
    setLotteryId: React.Dispatch<React.SetStateAction<number>>,
}

export const GlobalContext = React.createContext<globalContextValueType | null>(null)


export const GlobalContextProvider = ({children}: {children: React.ReactNode}) => {
    
    // qNect template values
    const [account, setAccount] = useState<string>('')
    const [balance, setBalance] = useState<number>(0)
    const [chainId, setChainId] = useState<number>(2) // 553: Arctic Test, 553: Snow Main
    const [selectedChainIsIcon, setSelectedChainIsIcon] = useState<boolean>(true)
    const [iconService, setIconService] = useState<IconService|null>(null)
    const [provider, setProvider] = useState<ethers.providers.Web3Provider|null>(null)
    const [signer, setSigner] = useState<ethers.Signer|null>(null)
    const [globalLoading, setGlobalLoading] = useState<boolean>(false)
    const [transactionToCheck, setTransactionToCheck] = useState<qTransactionChecker|null>(null)
    const [connectModalOpen, setConnectModalOpen] = useState<boolean>(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    // project specific state values
    const [lotteryId, setLotteryId] = useState<number>(0)
    
    const value: globalContextValueType = {  
        // qNect template values
        testValue: "test value from global context",
        account,
        setAccount,
        balance,
        setBalance,
        chainId,
        setChainId,
        selectedChainIsIcon,
        setSelectedChainIsIcon,
        iconService,
        setIconService,
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
        lotteryId: lotteryId,
        setLotteryId: setLotteryId,
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}  
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => React.useContext(GlobalContext)!;
