'use client';
import React,{useEffect} from 'react'
import { useGlobalContext } from '@/utils/context/globalContext'
import AwaitTransactionModal from '@/components/qnect/AwaitTransactionModal'
import ChooseWalletProvider from '@/components/qnect/ChooseWalletProvider';
import QNectButton from '@/components/qnect/QNectButton';


const QNectHandler = () => {
    const { transactionToCheck, connectModalOpen } = useGlobalContext()

    return (
    <div>

      <QNectButton/>

      {/* open the Tx handler modal at top z-index when transactionToCheck is not null */}
      {transactionToCheck && <AwaitTransactionModal/>}
      
      {/* open the wallet provider modal at top-minus-1 z-index when connectModalOpen is true */}
      {connectModalOpen && <ChooseWalletProvider/>}

    </div>
  )
}

export default QNectHandler