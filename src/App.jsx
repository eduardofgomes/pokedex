import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'
import { getPokemon, getPokemonData, searchPokemon } from './Api'
import { FavoriteProvider } from "./contexts/FavoriteContext";

const favoritesKey = "f"
function App() {
  const [loading, setLoading] = useState(false) 
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [notFound, setNotFound] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [favorites, setFavorites] = useState([])

  const itensPerPage = 30
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
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

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setFavorites(pokemons)
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, [])

  useEffect(() => {
    fetchPokemons()
  }, [page])

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex  = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1)
    } else {
      updateFavorites.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)
  }

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
        return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (
          <div class-name="not-found-text"> Pokemon not found </div>
        ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />)}
      </div>
    </FavoriteProvider>
  )
}

export default App
