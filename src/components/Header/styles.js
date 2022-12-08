import styled from "styled-components";

export const Header = styled.header`
    height: 7.25rem;
    margin-top: 4.0625rem;
    margin-bottom: 4.0625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
    h1 {
        font-size: var(--title-1);
        font-weight: var(--font-weight-5);
        line-height: var(--line-height);
    }

    span {
        font-weight: var(--font-weight-2);
        color: var(--color-red);
    }
`;
