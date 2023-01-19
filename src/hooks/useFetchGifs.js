import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export default function useFetchGifs( category ) {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages( newImages )
        setIsLoading( false )
    }
    
    //Utilizamos un useEffect(Hook) para que solo se cargue una ves la api
    useEffect( () => {
        getImages()
    }, [])

    return (
        { images,
        isLoading
        }
    )
}
