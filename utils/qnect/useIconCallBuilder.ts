'use client';
import IconService from 'icon-sdk-js';
import { useGlobalContext } from '../context/globalContext';

const useIconCallBuilder = (to: string, method: string, params:object) => {
    const { iconService } = useGlobalContext();
    
    // build a call object
    const callContract = async() =>  {
      const txObj = new IconService.IconBuilder.CallBuilder()
        .to(to)
        .method(method)
        .params(params)
        .build()

        const res = await iconService!.call(txObj).execute()
        return res
    }

 
    return { callContract } ;
  };
  
  export default useIconCallBuilder;