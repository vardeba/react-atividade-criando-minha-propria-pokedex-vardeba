import styled from "styled-components";
import Pokeball from "../../assets/pokeball_icon.svg";

export const MyPokemonSection = styled.section`
    width: 30.375rem;
    max-width: 100%;
    height: fit-content;
    max-height: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-red);
    border-radius: var(--radius);
    padding: 1.1875rem;

    h2 {
        font-size: var(--title-2);
        font-weight: var(--font-weight-3);
        line-height: var(--line-height);
        color: var(--color-white);

        margin-bottom: 1.5rem;
    }

    span {
        font-size: var(--title-4);
        font-weight: var(--font-weight-2);
        line-height: var(--line-height);
        color: var(--color-white);
        opacity: 0.8;

        margin-bottom: 1rem;
    }

    ul {
        max-height: 30rem;
        width: 100%;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        border-top: 0.1875rem solid var(--color-white);
        padding-top: 5rem;

        scrollbar-width: 0.3125rem;

        ::-webkit-scrollbar {
            width: 0.3125rem;
        }
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 1rem;
    }

    h4 {
        font-size: var(--title-4);
        font-weight: var(--font-weight-5);
        line-height: var(--line-height);
        color: var(--color-white);
    }

    button {
        width: 3rem;
        height: 3rem;

        background-color: transparent;
        background-image: url(${Pokeball});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        border: none;
    }
`;
