import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [myPokemonList, setMyPokemonList] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);

    const addPokemonToList = (pokemonToAdd) => {
        if (
            !myPokemonList.some((element) => element.name === pokemonToAdd.name)
        ) {
            setMyPokemonList([...myPokemonList, pokemonToAdd]);
        }
    };

    const removePokemonFromList = (pokemonToRemove) => {
        const myNewPokemonList = myPokemonList.filter(
            (pokemon) => pokemon !== pokemonToRemove
        );
        setMyPokemonList(myNewPokemonList);
    };

    const searchPokemon = () => {
        const filteredPokemonList = pokemonList.filter((pokemon) =>
            pokemon.name.includes(filter.toLowerCase())
        );
        setFilteredPokemonList(filteredPokemonList);
    };

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const response = await api.get("/pokemon/?limit=151");
                setPokemonList(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        getPokemonList();
    }, []);

    return (
        <PokemonContext.Provider
            value={{
                pokemonList,
                myPokemonList,
                setMyPokemonList,
                addPokemonToList,
                removePokemonFromList,
                searchPokemon,
                filteredPokemonList,
                filter,
                setFilter,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
