import type { Personaje } from "../../types";
import type { Planeta } from "../../types/planeta";

export const PersonajeCard = (params: {pers: Personaje, planeta: Planeta}) => {

    const personaje = params.pers
    const planeta = params.planeta
    return(
        <>
            {personaje ? <div className="mainContainer">
                <div className="characterDataContainer">
                    <h2>{personaje?.name}</h2>
                    <p>Altura: {personaje?.height}</p>
                    <p>Especie: {personaje?.species}</p>
                </div>
            </div> : <h1>Loading...</h1>}
        </>
    )
}