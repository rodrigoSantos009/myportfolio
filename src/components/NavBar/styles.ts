import styled from "styled-components"

export const NavBarContainer = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        padding-bottom: 20px;
    }
`

export const ListMenu = styled.ul`
    padding: 5px;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
`