import styled from 'styled-components/macro';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "black" : "white"};
  color: ${props => props.$primary ? "white" : "black"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5em;
`;