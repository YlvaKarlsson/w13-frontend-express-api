import styled from 'styled-components/macro';

export const Input = styled.input`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "palevioletred" : "white"};
  color: ${props => props.$primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5em;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;