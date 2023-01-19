import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {

    const [categories, setCategories] = useState([ 'DragonBall Z' ])
    
    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory)
        //Checamos si ya existe el valor en el array
        if( categories.includes( newCategory )) return;

        setCategories([ newCategory, ...categories])
    }

  return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ value => onAddCategory(value) }
                // setCategories={ setCategories }
            />

            {/* Listado de Gif */}

            { categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                )
            )}
            {/* Gif Item */}
        </>
  )
}
