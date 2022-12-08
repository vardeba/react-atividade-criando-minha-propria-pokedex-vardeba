import React from "react";
import { Header } from "./styles";
import Pokeball from "../../assets/pokeball_icon.svg";

export const StyledHeader = () => {
    return (
        <Header>
            <div className="container">
                <h1>
                    Minha <span>Pokedex</span>
                </h1>
                <img src={Pokeball} alt="Pokeball" />
            </div>
        </Header>
    );
};
