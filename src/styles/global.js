import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: var(--color-gray-1);
    }

    :root {
        --color-red: #E83838;
        --color-white: #FAFAFA;
        --color-gray-1: #1E1E1E;
        --color-gray-2: #D9D6D6;
        --color-gray-3: #696969;

        --title-1: 4.8125rem; /* 77 */
        --title-2: 2.625rem; /* 42 */
        --title-3: 2.375rem; /* 38 */
        --title-4: 1.9375rem; /* 31 */
        --text-input: 1.625rem; /* 26 */
        --text-button: 1.3125rem; /* 21 */
        --text-label: 0.875rem; /* 14 */
        --line-height: 150%;

        --font-weight-1: 800;
        --font-weight-2: 700;
        --font-weight-3: 600;
        --font-weight-4: 500;
        --font-weight-5: 400;

        --radius: 0.5rem;
        
        --input-height: 4.4375rem; /* 71 */
        --button-height: 3.875rem; /* 62 */
        --button-width: 15.625rem; /* 250 */
    }

    body {
        background-color: var(--color-gray-2);
    }

    main {
        display: flex;
        gap: 4.4375rem;
        flex-wrap: wrap;
    }


    button {
        cursor: pointer;
        transition: 0.3s ease;
        filter: brightness(0.9);
        :hover {
            filter: brightness(1.0);
        }
    }

    .container {
        width: 20rem;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media (min-width: 45rem) {
        .container {
            width: 67.75rem;
        }
    }

    @media (min-width: 75rem) {
        .container {
            width: 105.5rem;
        }
    }
`;
