import styled from "styled-components";

export const SearchSection = styled.section`
    width: 30.375rem;
    max-width: 100%;
    height: fit-content;
    padding: 2rem 3.75rem;

    display: flex;
    flex-direction: column;

    background-color: var(--color-white);

    border-radius: var(--radius);

    h3 {
        text-align: center;
        font-size: var(--title-4);
        font-weight: var(--font-weight-2);
        line-height: var(--line-height);

        margin-bottom: 3rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        font-size: var(--text-label);
        font-weight: var(--font-weight-5);
        line-height: var(--line-height);
        color: var(--color-gray-3);

        margin-bottom: 0.5rem;
    }

    input {
        height: var(--input-height);
        padding-left: 1.5rem;

        font-size: var(--text-input);
        font-weight: var(--font-weight-2);
        line-height: var(--line-height);

        background-color: var(--color-gray-2);
        border: 0.0625rem solid var(--color-gray-2);
        border-radius: var(--radius);
        margin-bottom: 1rem;

        :focus {
            outline-color: var(--color-red);
        }
    }

    /* button {
        width: var(--button-width);
        height: var(--button-height);

        align-self: center;

        font-size: var(--text-button);
        font-weight: var(--font-weight-1);
        background-color: var(--color-red);
        color: var(--color-white);

        border: 0.0625rem solid var(--color-white);
        border-radius: var(--radius);
    } */
`;
