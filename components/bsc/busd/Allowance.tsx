import React from 'react'
import useBUSD from '@/hooks/useBUSD'

const Allowance = () => {
    const { allowance, setAllowanceToMintPrice } = useBUSD()
    return (
    <div>
        { allowance < 10 &&
            <div>
                <div>
                You have approved the contract to spend your BUSD!
                </div>
                <div
                    onClick={setAllowanceToMintPrice}
                    className='
                    bg-funYellow text-center rounded text-black 
                    cursor-pointer mt-4 hover:bg-white transition-colors ease-in-out'>
                    Click to set allowance to 10 BUSD!
                </div>  
            </div>
        }
    </div>
  )
}

export default Allowance