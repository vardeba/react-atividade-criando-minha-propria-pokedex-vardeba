import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { PokemonProvider } from "./contexts/PokemonContext";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PokemonProvider>
            <GlobalStyles />
            <App />
        </PokemonProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
