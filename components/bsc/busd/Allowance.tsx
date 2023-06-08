import React,{useEffect, useState} from 'react'
import useBUSD from '@/hooks/useBUSD'

const Allowance = () => {
    const { allowance, setAllowanceToMintPrice } = useBUSD()
    const [showAllowance, setShowAllowance] = useState(true)

    // makes sure to rerender the component when the allowance changes
    useEffect(() => {
        if (allowance >= 10) {
            setShowAllowance(false)
        } else {
            setShowAllowance(true)
        }
    },[allowance])

    return (
    <div>
        { showAllowance &&
            <div className='mt-4'>
                <div>
                You have approved the contract to spend your BUSD!
                </div>
                <div
                    onClick={setAllowanceToMintPrice}
                    className='
                    bg-funYellow text-center rounded text-black 
                    cursor-pointer mt-2 hover:bg-white transition-colors ease-in-out'>
                    Click to set allowance to 10 BUSD!
                </div>  
            </div>
        }
    </div>
  )
}

export default Allowance