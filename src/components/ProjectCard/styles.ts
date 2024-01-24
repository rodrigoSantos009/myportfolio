import styled from "styled-components";

export const ProjectCardContainer = styled.div`

`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const CardImage = styled.div`
  width: 460px;
  height: 331px;
  background-size: cover;
  
  @media (max-width: 600px) {
    width: 360px;
    height: 231px;
  }
`

export const Tecs = styled.div`
  display: flex; 
  gap: 30px;
  margin-top: 20px;
`