// import { qEvents } from "./qevents";
import { ethers } from "ethers";

// export type qTransactionChecker = {
//     // the ethers docs are a bit unclear on the type of the receipt
//     // it talks about a TransactionResponse-type, can't find it or get it to work
//     // going with ethers.ContractReceipt for now and cast it to 'any' in 
//     // the AwaitTransactionModal in order to call the wait() function
//     txobject :  Promise<ethers.ContractReceipt> | string,
//     // eventToEmit: qEvents | null
// }

// a function pair is a tuple of a boolean and a function
// export type qFunctionPair = {
//     fn:React.Dispatch<React.SetStateAction<boolean>>,
//     bl:boolean
//   };
  
// key is string (example: buy_tx) and value is a function pair to trigger when the key is called
// export type qEventsObject = {
// key: string,
// value: qFunctionPair[]|[]
// };
