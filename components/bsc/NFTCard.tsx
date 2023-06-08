import React, {use, useEffect, useState} from 'react'
import Image from 'next/image'
import useBSCDapp from '@/hooks/useBSCDapp'

type Props = {
    id: number,
}

const NFTCard = (props:Props) => {
    const [uri, setUri] = useState<null|string>(null)
    const [imageUrl, setImageUrl] = useState<null|string>(null)
    const [name, setName] = useState<null|string>(null)
    const [attributes, setAttributes] = useState<any[]>([])
    const { getUri, contractReader } = useBSCDapp()

    useEffect(() => {
        const getNFTUri = async () => {
            const _uri = await getUri(props.id)
            setUri(_uri as string + ".json")
        }

        if (contractReader) {
            getNFTUri()
        }

    }, [props.id, contractReader])

    useEffect(() => {
        const getNFTData = async () => {
            const res = await fetch(uri as string)
            const data = await res.json()
            setImageUrl(data.image)
            setName(data.name)
            setAttributes(data.attributes)
        }

        if (uri) {
            getNFTData()
        }
    }, [uri])


    return (
    <div className='bg-funBlue rounded-md border-2 border-white flex flex-col items-center px-4 py-2'>

        { imageUrl && <Image alt={imageUrl} src={imageUrl} width={200} height={200} className='rounded shadow-xl' /> }
        { name && <div className='text-xl uppercase my-4'>{name}</div> }
        { attributes && attributes.map((attribute, index) => {
            return <div key={index} 
            className='text-xs'>
                {attribute.trait_type}: {attribute.value}
            </div>
        }
        )}
    </div>
  )
}

export default NFTCard