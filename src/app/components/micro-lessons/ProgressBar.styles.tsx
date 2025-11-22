import styled, { DefaultTheme } from 'styled-components';

export const ProgressBarContainer = styled.div`
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const ProgressBarFill = styled.div<{ progress: number }>`
  width: ${({ progress }): DefaultTheme => progress}%;
  height: 100%;
  background-color: #ff69b4;
  transition: width 0.3s ease;
`;
