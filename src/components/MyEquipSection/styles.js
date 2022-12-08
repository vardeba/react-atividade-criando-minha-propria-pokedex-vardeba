import styled from "styled-components";
import Trash from "../../assets/trash_icon.svg";

export const MyEquipSection = styled.section`
    width: 30.375rem;
    max-width: 100%;
    height: fit-content;
    max-height: 40rem;

    display: flex;
    flex-direction: column;

    background-color: var(--color-gray-1);
    border-radius: var(--radius);
    padding: 1.1875rem;

    h2 {
        font-size: var(--title-3);
        font-weight: var(--font-weight-3);
        line-height: var(--line-height);
        color: var(--color-white);

        margin-bottom: 3.875rem;
    }

    ul {
        max-height: 30rem;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        scrollbar-width: 0.125rem;

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
        width: 2rem;
        height: 2rem;

        background-color: transparent;
        background-image: url(${Trash});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;

        border: none;
    }
`;
