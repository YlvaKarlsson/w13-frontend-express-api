import styled from 'styled-components/macro'

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: -webkit-center;
  color: black;
  background-color: #c0c2c3;
  border-radius: 5em;
  min-width: 15em;
  min-height: 2em;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  padding: 0.2em;
  // don't know exactly how to fix the styling yet
  // min-width: 10em;
`;
