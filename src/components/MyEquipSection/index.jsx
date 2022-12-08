import React, { useContext } from "react";
import { MyEquipSection } from "./styles";
import { PokemonContext } from "../../contexts/PokemonContext";

export const StyledMyEquipSection = () => {
    const { myPokemonList, removePokemonFromList } = useContext(PokemonContext);

    return (
        <MyEquipSection>
            <h2>Meu Time de Pokemon</h2>
            <ul>
                {myPokemonList < 1 ? (
                    <h4>Sua equipe está vazia</h4>
                ) : (
                    myPokemonList.map((pokemon, key) => {
                        return (
                            <li key={pokemon.name}>
                                <h4>{pokemon.name}</h4>
                                <button
                                    onClick={() =>
                                        removePokemonFromList(pokemon)
                                    }
                                ></button>
                            </li>
                        );
                    })
                )}
            </ul>
        </MyEquipSection>
    );
};
