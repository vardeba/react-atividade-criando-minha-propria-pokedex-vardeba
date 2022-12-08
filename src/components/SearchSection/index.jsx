import React, { useContext } from "react";
import { SearchSection } from "./styles";
import { PokemonContext } from "../../contexts/PokemonContext";

export const StyledSearchSection = () => {
    const { searchPokemon, filter, setFilter } = useContext(PokemonContext);

    return (
        <SearchSection>
            <h3>Buscar pokemon</h3>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="pokemonInput">Nome do pokemon</label>
                <input
                    type="text"
                    id="pokemonInput"
                    placeholder="Nome do pokemon"
                    value={filter}
                    onChange={(event) => {
                        setFilter(event.target.value);
                        console.log(event.target.value);
                        searchPokemon();
                    }}
                />
            </form>
        </SearchSection>
    );
};
