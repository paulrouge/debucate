# How to use qnect

Goal is to trigger a state change on multiple components at once, after a tx is confirmed.

Important to know that the AwaitTransactionModal.tsx component is opened/active when
`transactionToCheck` is not null. This is set in the globalContext.tsx file. This is the type of transactionToCheck:

```typescript
export type qTransactionChecker = {
    txobject :  Promise<ethers.ContractReceipt>,
    eventToEmit: qEvents
}
```

## step 1

Create the specific tx types that should be used to trigger the state change. Do this in the
qevents.ts file, by setting the enum.

example:

```typescript
export enum qEvents {
    TicketsBought = 'qNect_tx_tickets_bought',
    CreatedNewLottery = 'qNect_tx_created_new_lottery',
    PickedWinner = 'qNect_tx_picked_winner',
}
```

## step 2
When you create a tx object aka sign a transaction, you can now add the eventToEmit property to the qTransactionChecker object.

Example:

```typescript
    const handleBuyTickets = async () => {
        const options = {
            value: ethers.utils.parseEther((amountOfTickets * props.lottery.ticketPrice).toString()),
            gasLimit: 10000000
        }

        try {
            
            const tx:Promise<ethers.ContractReceipt> = await contractSigner.buyTickets(
                lotteryId, 
                amountOfTickets, 
                options
            )

            // the qNect helper to open the AwaitTransactionModal, the eventToEmit is the 
            // the event that will be emitted from the AwaitTransactionModal, when the tx is done
            const qChecker: qTransactionChecker = {
                txobject: tx,
                eventToEmit: qEvents.TicketsBought,
            }

            setTransactionToCheck(qChecker)

        } catch (e) {
            console.log(e)
        }
        
    }
```

So in this case, when the buyTickets function on the contract is called, the AwaitTransactionModal will be opened, and when the tx is done, the qEvents.TicketsBought event will be emitted.

## step 3
Handle the event in the components that should be updated. Example, add the code below to all components that should be updated when the qEvents.TicketsBought event is emitted.:

```typescript
    const [toggleGetter, setToggleGetter] = useState<boolean>(false)

    const qAddEventListener = () => {
        if(typeof window === 'undefined') return
        window.addEventListener(qEvents.TicketsBought, () => {
          setToggleGetter(!toggleGetter)
        })
      }
    
    useEffect(() => {
        qAddEventListener()

        return () => {
            if(typeof window === 'undefined') return
            window.removeEventListener(qEvents.TicketsBought, () => {
                setToggleGetter(!toggleGetter)
            })
        }
    }, [toggleGetter])
```
