'use client';
import React,{ useState }  from 'react'
import { useGlobalContext } from '../../utils/context/globalContext'
import { Listbox,Transition } from '@headlessui/react'
import { CheckIcon,ChevronUpDownIcon } from '@heroicons/react/20/solid'

type Chain = {
  id: number
  name: string
  unavailable: boolean
}

const chains = [
  { id: 552, name: 'Snow Main', unavailable: false },
  { id: 553, name: 'Arctic Test', unavailable: false },
  { id: 1, name: 'Icon Main', unavailable: false },
]

const SelectChainId = () => {
  const { setChainId, setSelectedChainIsIcon } = useGlobalContext()
  const [selectedChain, setSelectedChain] = useState(chains[0])

  const handleSelectChain = (event: Chain) => {
    if(event.name === 'Icon Main') {
      setSelectedChainIsIcon(true)
    } else {
      setSelectedChainIsIcon(false)
    }
    setChainId(event.id)
    setSelectedChain(event)
  }

  return (
    <div onClick={(e)=>e.stopPropagation()}>
      
      <Listbox value={selectedChain} onChange={(e)=>handleSelectChain(e)}>
      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-black">{selectedChain.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
        <Listbox.Options className='bg-white rounded mt-2 absolute top-0 w-full p-4 cursor-pointer font-bold'>
        {chains.map((chain) => (
                <Listbox.Option
                  key={chain.id}
                  disabled={chain.unavailable}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    } ${chain.unavailable ? 'opacity-50' : ''}`
                  }
                  value={chain}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {chain.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
        </Listbox.Options>
      </Transition>
      </Listbox>
    </div>
  )
}

export default SelectChainId