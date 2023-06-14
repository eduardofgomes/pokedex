import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData } from './Api'

function App() {
  const [loading, setLoading] = useState(false) 
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const itensPerPage = 30
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.error("fetchPokemon error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        page={page} 
        totalPages={totalPages}  
        setPage={setPage}
      />
    </>
  )
}

export default App
