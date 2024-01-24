import styled from "styled-components";

export const TecnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

export const Tecs = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
  }
`