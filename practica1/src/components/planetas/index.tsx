import type { Planeta } from "../../types";
import "./style.css";

export const PlanetaCard = (params: {planeta?: Planeta}) => {

    const planeta = params.planeta

    return(
        <>
            {planeta ? <div className="planetData">
                <h3>{planeta?.name}</h3>

                <p><strong>Periodo de rotación:</strong> {planeta?.rotation_period}</p>
                <p><strong>Periodo orbital:</strong> {planeta?.orbital_period}</p>
                <p><strong>Diámetro:</strong> {planeta?.diameter}</p>
                <p><strong>Clima:</strong> {planeta?.climate}</p>
                <p><strong>Gravedad:</strong> {planeta?.gravity}</p>
                <p><strong>Terreno:</strong> {planeta?.terrain}</p>
                <p><strong>Agua superficial:</strong> {planeta?.surface_water}</p>
                <p><strong>Población:</strong> {planeta?.population}</p>
            </div>: <h1>No Hay Planeta</h1>}
        </>
    )
}