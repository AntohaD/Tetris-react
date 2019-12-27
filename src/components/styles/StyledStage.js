import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(20vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 20vw;
  background: #111;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(35vw / ${props => props.width})
    );
    max-width: 35vw;
  }

  @media (max-width: 1200px) {
    grid-template-rows: repeat(
      ${props => props.height},
      calc(30vw / ${props => props.width})
    );
    max-width: 30vw;
  }

  
`