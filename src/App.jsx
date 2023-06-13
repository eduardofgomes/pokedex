import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData } from './Api'

function App() {
  const [loading, setLoading] = useState(false) 
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemon()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.error("fetchPokemon error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </>
  )
}

export default App
