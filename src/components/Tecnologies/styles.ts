import styled from "styled-components";

export const TecnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap-wrap;

  @media (max-width: 600px) {
    
  }
`

export const Tecs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 20px;
`