import styled, { DefaultTheme } from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  overflow-y: scroll;
  padding: 1rem 2rem;
`;

export const Card = styled.button<{ $completed: boolean }>`
  all: unset;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ $completed }): DefaultTheme => ($completed ? '#ff69b4' : '#fbd8e7')};
  border-radius: 1.5rem;
  cursor: pointer;
  h4,
  p {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
  }
  p {
    color: ${({ $completed }): DefaultTheme => ($completed ? 'white' : 'black')};
  }
  h4 {
    padding: 0.5rem 0;
    color: ${({ $completed }): DefaultTheme => ($completed ? 'white' : 'red')};
  }
`;
export const Dot = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 50%;
`;
