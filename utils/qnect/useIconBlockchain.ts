import { useState, useEffect } from 'react';
import IconService from 'icon-sdk-js';
import { useGlobalContext } from '../context/globalContext';
import { qTransactionChecker } from './qtypes';

const useIconBlockchain = () => {
    const { account, setAccount, setTransactionToCheck } = useGlobalContext();
    const HttpProvider = IconService.HttpProvider;
    const PROVIDER = new HttpProvider("https://ctz.solidwallet.io/api/v3");
    const iconService = new IconService(PROVIDER);

    
    // CREATE EVENTLISTENER
    async function eventHandler(event: any){
        console.log(event.detail)
        // return
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


    useEffect(() => {
        
        // if eventlistener is not added, add it
            window.addEventListener('ICONEX_RELAY_RESPONSE', eventHandler);
        return () => {
            window.removeEventListener('ICONEX_RELAY_RESPONSE', eventHandler);

        };
    }, []);
  
    return ;
  };
  
  export default useIconBlockchain;