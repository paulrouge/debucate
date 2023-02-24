'use client';
import { useState, useEffect } from 'react';
import IconService from 'icon-sdk-js';
import { useGlobalContext } from '../context/globalContext';
import { qTransactionChecker } from './qtypes';


const useIconBlockchain = () => {
    const { setAccount, setTransactionToCheck, chainId, selectedChainIsIcon } = useGlobalContext();
    const HttpProvider = IconService.HttpProvider;
    
    const api_endpoints = {
        mainnet: "https://ctz.solidwallet.io/api/v3",
        testnet: "https://lisbon.net.solidwallet.io/api/v3",
    }

    let PROVIDER;

    if(selectedChainIsIcon && chainId === 2) {
        PROVIDER = new HttpProvider(api_endpoints.testnet);
    } else {
      PROVIDER = new HttpProvider(api_endpoints.mainnet);
    }

    const iconService = new IconService(PROVIDER);

    // CREATE EVENTLISTENER
    async function eventHandler(event: any){
        const { type, payload } = event.detail;

        switch (type) {
            case "RESPONSE_HAS_ACCOUNT":
                // console.log(type, payload)
                break
            case "RESPONSE_HAS_ADDRESS":
                break
            case "RESPONSE_ADDRESS":
                setAccount(payload)
                break
            case "RESPONSE_JSON-RPC":
                console.log(payload)
                // use payload.result to set transaction to check?
                // setTransactionToCheck(payload.result)
                
                // return payload
                break 
            case "CANCEL_JSON-RPC": 
                // sessionStorage.setItem('tx', 'cancelled')
                // responseScore.value = null;
                break
            case "RESPONSE_SIGNING":
                // let _sig = JSON.stringify(payload)
                // console.log(_sig)
                break
            case "CANCEL_SIGNING":
                
                // console.log('cancelled signing') 
                // signingData.value = null
                // responseSigning.value = "> Signature : ";
                break

            default:
        }
    }

    const setEventListeners = () => {
        window.removeEventListener('ICONEX_RELAY_RESPONSE', eventHandler);
        window.addEventListener('ICONEX_RELAY_RESPONSE', eventHandler);
    }

    
  
    return { setEventListeners, iconService } ;
  };
  
  export default useIconBlockchain;