import type {ResultadoPers, Planeta, Vehiculo} from './types/index.ts'
import { useEffect, useState } from 'react'
import { api } from './api/api.ts'
import './App.css'
import { PersonajeCard } from './components/personajes/index.tsx'
import axios from 'axios'

function App() {
  const [personajes, setPersonajes] = useState<ResultadoPers|null>(null)
  const [planetas, setPlanetas] = useState<Planeta[]|null>(null)
  const [vehiculos, setVehiculos] = useState<Vehiculo[]|null>(null)

  const [error, setError] = useState<string|null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [pagina, setPagina] = useState<number>(1)

  const fetchDeLaAPI = async (pagina: number) => {

    setLoading(true)
    await api
    .get<ResultadoPers>(`/people/${pagina ? "?page=" + pagina : "1"}`)
    .then((respuesta) => {
      setPersonajes((prev) => {
        if (!prev) return respuesta.data

        return {
          ...respuesta.data,
          results: [...prev.results, ...respuesta.data.results]
        }
      })
      const homeworld = [
        ...new Set(respuesta.data.results.map((pers) => pers.homeworld))
      ]

      const vehicles: Set<string> = new Set()
      
      //La única forma de hacer con un map es haciendo una variable inicial
      respuesta.data.results.map((pers) => {
        pers.vehicles.map((veh) => {
          vehicles.add(veh)
        })
      })

      const PlanetasArr = Promise.all(
        homeworld.map((pla) => axios.get<Planeta>(pla))
      )

      const VehiclesArr = Promise.all(
        Array.from(vehicles).map((veh) => 
          axios.get<Vehiculo>(veh)
        )
      )

      return Promise.all([PlanetasArr, VehiclesArr])
    })
    .then(([PlaRes, VehRes]) => {
 
      const planetasAll = PlaRes.map((pla) => pla.data)
      setPlanetas((prev) => {
        if (!prev) return planetasAll

        return [
          ...prev,
          ...planetasAll.filter(
            (nuevo) => !prev.some((p) => p.url === nuevo.url)
          )
        ]
      })
      const vehiculosAll = VehRes.map((veh) => veh.data)
      setVehiculos((prev) => {
        if (!prev) return vehiculosAll

        return [
          ...prev,
          ...vehiculosAll.filter(
            (nuevo) => !prev.some((v) => v.url === nuevo.url)
          )
        ]
      })
    })
    .catch((e) => {setError(`Error al obtener los datos: ${e}`)})
    .finally(() => setLoading(false));      
  }

  useEffect(() => {
    fetchDeLaAPI(pagina)
  }, [pagina]);


  return (
    <>
      <div>
        {loading && <h2>Loading...</h2>}
        {!loading && personajes?.results.map((pers) => (
          planetas?.map((pla) => {
            if (pers.homeworld == pla.url) {
              const envVeh: Vehiculo[] = []
              vehiculos?.map((vehInd) => {
                pers.vehicles.map((vehPers) => {
                  if (vehInd.url == vehPers) {
                    envVeh.push(vehInd)
                  }
                })
              })
              //Return necesario cuando en un .map para que no devuelva null
              return <PersonajeCard key={pers.url} pers={pers} planeta={pla} vehiculo={envVeh}/> 
            }
          })
      ))}
      {!loading && <button onClick={
          () => {
            setPagina(pagina+1)
          }
        }>Mostrar más</button>
      }
      </div>
    </>
  )
}

export default App
