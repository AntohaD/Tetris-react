import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  text-align: center;
`

export const StyledTetrisTitle = styled.div`
  display: block;
  padding: 40px;
  color: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 2rem;
`

export const StyledLink = styled.a`
  display: block;
  padding: 40px;
  color: white;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`
