import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

//Component
export default function GifGrid({ category }) {

//Utilizamos un custom Hook
const { images, isLoading } = useFetchGifs( category )

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }

        <div className="card-grid">
            { images.map( ( image ) => (
                <GifItem 
                    key={ image.id }
                    // esparcimos todas las propiedades
                    { ...image }
                />
                )
            )}
        </div>
    </>
  )
}
