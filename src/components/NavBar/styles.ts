import styled from "styled-components"

export const NavBarContainer = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`