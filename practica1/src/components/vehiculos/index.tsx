import type { Vehiculo } from "../../types";
import "./style.css";

export const VehiculoCard = (params: {vehiculo?: Vehiculo[]}) => {

    const vehiculo = params.vehiculo

    return(
        <>
            {vehiculo ? <div className="VehiculesData">
                {vehiculo.map((veh) => {
                    return (
                        <div key={veh.url} className="VehiculesInd">
                            <h4>{veh?.name}</h4>

                            <p><strong>Modelo:</strong> {veh?.model}</p>
                            <p><strong>Coste en créditos:</strong> {veh?.cost_in_credits}</p>
                            <p><strong>Tripulación:</strong> {veh?.crew}</p>
                            <p><strong>Pasajeros:</strong> {veh?.passengers}</p>
                            <p><strong>Velocidad máxima atmosférica:</strong> {veh?.max_atmosphering_speed}</p>
                            <p><strong>Clase de vehículo:</strong> {veh?.vehicle_class}</p>
                        </div>
                    )
                })}
            </div>: <h1>No Hay Planeta</h1>}
        </>
    )
}