import React from 'react'
import useBUSD from '@/hooks/useBUSD'


const Balance = () => {
    const { balance } = useBUSD()
    
    return (
        <div>Balance: {balance} BUSD</div>
    )
}

export default Balance