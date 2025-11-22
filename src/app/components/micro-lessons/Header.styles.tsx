import styled, { DefaultTheme } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  align-items: center;
  /* background-color: #f5f5f5; */
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
`;

export const ProfileImage = styled.img<{ $invert?: boolean }>`
  width: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ $invert }): DefaultTheme => ($invert ? 'white' : 'black')};
`;
export const Title = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-size: 24px;
  margin: 0;
  border-bottom: 2px solid #ff69b4;
  padding-bottom: 2px;
`;
