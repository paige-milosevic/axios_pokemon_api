import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((res) => {
            console.log(res);
            console.log(res.data.results);
            setPokemon(res.data.results);
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <ul>
            {pokemon.map((pokemon, index)=>(<li value={index}>{pokemon.name}</li>))}
        </ul>
    )

}

export default Pokemon;