import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import { getPokemon } from './Api'

function App() {
  const [loading, setLoading] = useState(false) 
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons()
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log("fetchPokemon error: ", error)
    }
  }


  useEffect(() => {
    console.log("teste")
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
