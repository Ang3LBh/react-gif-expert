import { useState } from 'react';

export default function AddCategory({ onNewCategory }) {

const [inputValue, setInputValue] = useState('')

const onInputChange = ({ target }) => {
    setInputValue(target.value)
}

const onSubmit = ( even ) => {
    even.preventDefault()
    if( inputValue.trim().length <= 1) return;

    onNewCategory( inputValue.trim() )
    //setCategories( categories => [inputValue, ...categories] )
    //Limpoamos el inputValue
    setInputValue('')
}

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
