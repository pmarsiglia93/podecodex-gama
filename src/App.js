import { useEffect, useState } from "react";
import PokemonThumnail from "./components/PokemonThumnail";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { CartContextProvider } from "./components/context/CartContext";
import ShoppingCart from "./components/Cart";

import './index.css'
import './index.scss'


function App() {


  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonsFilterAdd, setpokemonsFilterAdd] = useState([])

  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const [search, setSearch] = useState('')
  const filteredPokemons = allPokemons
    .filter((PokemonThumnail) => PokemonThumnail.name.startsWith(search))
  console.log(search)

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log(data.next)
    setLoadMore(data.next)


    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])

      })
    }
    createPokemonObject(data.results)
    console.log(allPokemons)
  }


  useEffect(() => {
    getAllPokemons()
  }, [])

  useEffect(() => {
    if (search == '') {
      setpokemonsFilterAdd([])
    } else {
      const filteredPokemons = allPokemons
        .filter((PokemonThumnail) => PokemonThumnail.name.startsWith(search))
      console.log(search)
      console.log(filteredPokemons)
      setpokemonsFilterAdd(filteredPokemons)
    }
  }, [search])



  return (

    <CartContextProvider>
      <div className="app-container">
        
          <Header />
          <Searchbar search={search} setSearch={setSearch} />
        

        <h1>Pokemon - Desafio Gama</h1>
        <div className="pokemon-container">
          <div className="pokemon-contain">
            <div className="all-container">

              {
                pokemonsFilterAdd.length ?

                  pokemonsFilterAdd?.map((pokemon, index) => {

                    return (
                      < PokemonThumnail
                        id={pokemon.id}
                        all={pokemon}
                        name={pokemon.name}
                        image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                        type={pokemon.types[0].type.name}
                        price={pokemon.base_experience}
                        key={index}
                      />
                    )
                  }) : allPokemons.map((pokemon, index) =>

                    < PokemonThumnail
                      id={pokemon.id}
                      all={pokemon}
                      name={pokemon.name}
                      image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                      type={pokemon.types[0].type.name}
                      price={pokemon.base_experience}
                      key={index}
                    />
                  )
              }


            </div>
            <button className="load-more" onClick={() => getAllPokemons()}>Load More</button>
          </div>
          
        </div>
      </div>

    </CartContextProvider>

  );
}

export default App;
