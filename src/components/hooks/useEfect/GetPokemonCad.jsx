import React from 'react'

const GetPokemonCad = ({getpokemon}) => {
  return (
    <>
<div>{getpokemon.name}</div>
<div>{getpokemon.height}</div>
<div>{getpokemon.stats[0].base_stat}</div>
<div>{getpokemon.stats[0].stat.name}</div>

<img className='h-[200px] w-[200px]' src={getpokemon.sprites.other.dream_world.front_default} alt="" />
    </>
  )
}

export default GetPokemonCad