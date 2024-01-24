import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(9, 9, 12);

  border: 1px solid red;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`