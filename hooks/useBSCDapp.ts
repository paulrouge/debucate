import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'
const contractArtifact = require('@/utils/constants/contract_abis/nft_abi.json')
const erc20Artifact = require('@/utils/constants/contract_abis/erc20_minimal.json')


const useBSCDapp = () => {
    const { chainId, provider, signer } = useGlobalContext()
    const [contractSigner, setContractSigner] = useState<any>(null) // Define contract state
    const [contractReader, setContractReader] = useState<any>(null) // Define contract state
    // const [erc20Signer, setErc20Signer] = useState<any>(null) // Define contract state
    const [erc20Reader, setErc20Reader] = useState<any>(null) // Define contract state
    const [nftBalance, setNftBalance] = useState<any>(null) // Define contract state

    useEffect(() => {
        const loadContractABI = async () => {
            try {
                
                const abi = contractArtifact
    
                // Create a reader contract instance
                const contractAddress = ContractAddresses[chainId].NFT_contract // Address of the deployed contract
                const newContract = new ethers.Contract(contractAddress!, abi, provider!)

                // Set the contract state
                setContractReader(newContract)

                // Create a signer contract instance
                const _signer = provider?.getSigner()
                const newContractSigner = new ethers.Contract(contractAddress!, abi, _signer)
                setContractSigner(newContractSigner)

            } catch (error) {
                console.error('Error loading contract ABI:', error)
            }
        }
        // if(!signer) return
        if (provider){
            loadContractABI()
        }
       
    }, [provider, chainId])


    useEffect(() => {
        const loadContractABI = async () => {
            try {
                const abi = erc20Artifact
                // console.log('abi', abi)

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

    useEffect(() => {
        const getNFTBalance = async () => {
            try {
                const balance = await contractReader?.balanceOf(signer?.getAddress())
                setNftBalance(balance)
            } catch (error) {
                console.error('Error getting NFT balance:', error)
            }
        }
        
        if (contractReader){
            getNFTBalance()
        }

    }, [contractReader, signer])



    return { 
        contractSigner, 
        contractReader,
        erc20Reader
    }
}

export default useBSCDapp