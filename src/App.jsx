import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Pokedex from './components/Pokedex'

function App() {
  

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex />
    </>
  )
}

export default App
