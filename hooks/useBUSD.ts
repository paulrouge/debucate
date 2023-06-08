import React, { use, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'
import {MINTFEE} from '@/utils/constants/constants'

const erc20Artifact = require('@/utils/constants/contract_abis/erc20_minimal.json')


const useBUSD = () => {
    const { chainId, provider, signer, account, setTransactionToCheck, reRenderHelper } = useGlobalContext()
    const [erc20Reader, setErc20Reader] = useState<any>(null) // Define contract state
    const [erc20Signer, setErc20Signer] = useState<any>(null) // Define contract state
    const [balance, setBalance] = useState<number>(0) // Define contract state
    const [allowance, setAllowance] = useState<number>(0) // Define contract state

    // get contract reader and set global state
    useEffect(() => {
        const loadContractABI = async () => {
            try {
                const abi = erc20Artifact

                // Create a contract instance
                const contractAddress = ContractAddresses[chainId].BUSD_contract // Address of the deployed contract
                const newContract = new ethers.Contract(contractAddress!, abi, provider!)

                // Set the contract state
                setErc20Reader(newContract)
            } catch (error) {
                console.error('Error loading contract ABI:', error)
            }
        }

        if (provider){
            loadContractABI()
        }

    }, [provider, chainId])

    // get contract signer and set global state
    useEffect(() => {
        const loadContractABI = async () => {
            try {
                const abi = erc20Artifact

                // Create a contract instance
                const contractAddress = ContractAddresses[chainId].BUSD_contract // Address of the deployed contract
                const newContract = new ethers.Contract(contractAddress!, abi, signer!)

                // Set the contract state
                setErc20Signer(newContract)
            } catch (error) {
                console.error('Error loading contract ABI:', error)
            }
        }

        if (signer){
            loadContractABI()
        }

    }, [signer, chainId])

    useEffect(() => {
        const getBalance = async () => {
            const _balance = await erc20Reader.balanceOf(account)
            setBalance(Number(_balance) / 10 ** 18)
        }
        
        if (account !== "" && erc20Reader) {
            getBalance()
        }
    }, [account, erc20Reader])

    useEffect(() => {
        const getAllowance = async () => {
            const _allowance = await erc20Reader.allowance(account, ContractAddresses[chainId].NFT_contract)
            setAllowance(Number(_allowance) / 10 ** 18)   
        }

        
        if (account !== "" && erc20Reader) {
            getAllowance()
        }

    }, [account, erc20Reader, reRenderHelper])

    useEffect(() => {
        console.log('allowance', allowance)
    }, [allowance])
    
    const setAllowanceToMintPrice = async () => {
        const amount = ethers.utils.parseUnits(MINTFEE.toString(), 18)
        // for testing set amount to 0
        // const amount = ethers.utils.parseUnits('0', 18)
        const gasLimit = await erc20Signer.estimateGas.approve(ContractAddresses[chainId].NFT_contract, amount)
        
        // add a buffer to the gas limit
        const adjustedGasLimit = gasLimit.mul(120).div(100);
   
        let options = {
            gasLimit: adjustedGasLimit
        }

        const tx = await erc20Signer.approve(ContractAddresses[chainId].NFT_contract, amount, options)
        setTransactionToCheck(tx.hash)
    }



    return { 
        erc20Reader,
        erc20Signer,
        balance,
        allowance,
        setAllowanceToMintPrice
    }
}

export default useBUSD