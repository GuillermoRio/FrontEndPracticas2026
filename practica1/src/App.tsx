import type {ResultadoPers} from './types/index.ts'
import { useEffect, useState } from 'react'
import { api } from './api/api.ts'
import './App.css'
import { PersonajeCard } from './components/personajes/index.tsx'
import type { Planeta } from './types/planeta.ts'
import axios from 'axios'

function App() {
  const [personajes, setPersonajes] = useState<ResultadoPers|null>(null)
  const [planetas, setPlanetas] = useState<Planeta[]|null>(null)
  const [error, setError] = useState<string|null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [pagina, setPagina] = useState<number>(1)

  const fetchDeLaAPI = async (pagina: number) => {

    setLoading(true)
    await api
    .get<ResultadoPers>(`/people/${pagina ? "?page=" + pagina : "1"}`)
    .then((respuesta) => {
      setPersonajes(respuesta.data)
      const homeworld = [
        ...new Set(respuesta.data.results.map((pers) => pers.homeworld))
      ]

      return Promise.all(
        homeworld.map((pla) => axios.get<Planeta>(pla))
      )

    })
    .then((PlaRes) => {
      const planetasAll = PlaRes.map((pla) => pla.data)
      setPlanetas(planetasAll)

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
        <button onClick={
          () => {
            setPagina(pagina+1)
          }
        }>Mostrar más</button>
        {!loading && personajes?.results.map((e) => (
          planetas?.map((pla) => {
            if (e.homeworld == pla.url)
              <PersonajeCard key={e.url} pers={e} planeta={pla}/>
          })
      ))}
      </div>
    </>
  )
}

export default App
