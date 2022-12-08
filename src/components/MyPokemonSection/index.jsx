import React, { useContext } from "react";
import { MyPokemonSection } from "./styles";
import { PokemonContext } from "../../contexts/PokemonContext";

export const StyledMyPokemonSection = () => {
    const { pokemonList, addPokemonToList, filteredPokemonList } =
        useContext(PokemonContext);

    return (
        <MyPokemonSection>
            <h2>Lista de pokemon</h2>
            <span>({pokemonList.length}) listados</span>
            <ul>
                {filteredPokemonList < 1
                    ? pokemonList.map((pokemon, key) => {
                          return (
                              <li key={pokemon.name}>
                                  <h4>{pokemon.name}</h4>
                                  <button
                                      onClick={() => addPokemonToList(pokemon)}
                                  ></button>
                              </li>
                          );
                      })
                    : filteredPokemonList.map((pokemon, key) => {
                          return (
                              <li key={pokemon.name}>
                                  <h4>{pokemon.name}</h4>
                                  <button
                                      onClick={() => addPokemonToList(pokemon)}
                                  ></button>
                              </li>
                          );
                      })}
                {}
            </ul>
        </MyPokemonSection>
    );
};
