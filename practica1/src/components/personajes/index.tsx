import type { Personaje, Vehiculo, Planeta } from "../../types";
import { PlanetaCard } from "../planetas";
import { VehiculoCard } from "../vehiculos";
import "./style.css";

export const PersonajeCard = (params: {pers: Personaje, planeta?: Planeta, vehiculo: Vehiculo[]}) => {

    const personaje = params.pers
    const planeta = params.planeta
    const vehiculo = params.vehiculo

    return(
        <>
            {personaje ? <div className="mainContainer">
                <div className="characterDataContainer">
                    <div className="PersonajeData">
                        <h2>{personaje.name}</h2>

                        <p><strong>Altura:</strong> {personaje.height}</p>
                        <p><strong>Peso:</strong> {personaje.mass}</p>
                        <p><strong>Color de pelo:</strong> {personaje.hair_color}</p>
                        <p><strong>Color de piel:</strong> {personaje.skin_color}</p>
                        <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
                        <p><strong>Año de nacimiento:</strong> {personaje.birth_year}</p>
                        <p><strong>Género:</strong> {personaje.gender}</p>
                    </div>
                    < PlanetaCard key={planeta?.url} planeta={planeta}/>
                    < VehiculoCard vehiculo={vehiculo}/>
                 </div>
            </div> : <h1>Loading...</h1>}
        </>
    )
}