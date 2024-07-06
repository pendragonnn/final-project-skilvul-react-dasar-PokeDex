import React, { useState } from 'react'
import pokemonJson from "../../data/pokemon.json"
import "./PokemonList.css"
import PokemonItem from '../PokemonItem/PokemonItem'

const PokemonList = () => {
  const [pokemons] = useState(pokemonJson)
  return (
    <div>
      <div className='list-pokemon'>
        {pokemons.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList