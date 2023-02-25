'use client';
import IconService from 'icon-sdk-js';
import { useGlobalContext } from '../context/globalContext';
import { qEvents } from './qevents';

const useIconSignTxBuilder = () => {
    const { chainId, account } = useGlobalContext();
    
    const signTx = async (
        to: string, 
        method: string, 
        params:object,
        value:number,
        stepLimit:number,
        qEvent: qEvents
        ) => {
            const callTransactionBuilder = new IconService.IconBuilder.CallTransactionBuilder();
            const obj = callTransactionBuilder
            .nid(`0x${chainId.toString()}`)
            .from(account)
            .to(to)
            .stepLimit(IconService.IconConverter.toBigNumber(stepLimit))
            .value(IconService.IconConverter.toBigNumber(value))
            .timestamp(`0x${((new Date()).getTime() * 1000).toString(16)}`)
            .method(method)
            .params(params)
            .version('0x3')
            .build(); 
        
        const raw = IconService.IconConverter.toRawTransaction(obj);        
        
        const _req = {
            "jsonrpc": '2.0', 
            "method": 'icx_sendTransaction',
            "params": raw,
            "id": 1234,
        }
        
        const customEvent = new CustomEvent('ICONEX_RELAY_REQUEST',  {   
            detail: { 
                type: 'REQUEST_JSON-RPC',
                payload:_req,
                // this event is not returned in the response, 
                eventToEmit: qEvent,
            }
        }); 

        window.dispatchEvent(customEvent);
       
    };
 
    return { signTx } ;
  };
  
  export default useIconSignTxBuilder;