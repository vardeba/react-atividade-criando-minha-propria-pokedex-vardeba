import React from "react";
import { StyledHeader } from "./components/Header";
import { StyledMyEquipSection } from "./components/MyEquipSection";
import { StyledMyPokemonSection } from "./components/MyPokemonSection";
import { StyledSearchSection } from "./components/SearchSection";

export const App = () => {
    return (
        <div>
            <StyledHeader />
            <main className="container">
                <StyledSearchSection />
                <StyledMyEquipSection />
                <StyledMyPokemonSection />
            </main>
        </div>
    );
};
