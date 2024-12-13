import React, { useEffect, useState } from 'react'
import GetPokemonCad from './GetPokemonCad'

const Pokemon = () => {
    const [apiGEt, setApiGEt] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [search, setsearch] = useState('')

    const fetchPokemon=async()=>{
        try {
            const res=await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data=await res.json()
            // console.log(data)

const getPokemonDetails=data.results.map(async(pokemon)=>{
    // console.log(pokemon.url);
    const res=await fetch(pokemon.url)
    const data=await res.json()
    // console.log(data);
    return data
})
const promise=await Promise.all(getPokemonDetails)
setApiGEt(promise)
setLoading(false)
console.log(promise)

        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])

const searchData=apiGEt.filter((curdata)=>curdata.name.toLowerCase().includes(search.toLocaleLowerCase()))

    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(error){
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }
    return (
        <>
        <div>hello</div>
        <div>
            <input type="text" name="search" id="search" onChange={(e)=>setsearch(e.target.value)} value={search}/>
        </div>
        {
            searchData.map((pokemon)=>{
                return(
               <GetPokemonCad key={pokemon.id} getpokemon={pokemon}/>
                )
            })
        }
        </>
    )
}

export default Pokemon