import styled, { DefaultTheme, css } from 'styled-components';

export const ContentFrame = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      width: 100%;
      padding: 7.375rem 15.334rem 3rem 15.334rem;
      flex-direction: column;
      align-items: center;
      gap: 2.8125rem;
      border-radius: 0;
      background: #f5f5f5;
      @media (max-width: 1200px) {
        padding: 5rem 10rem 2rem 10rem;
      }

      @media (max-width: 768px) {
        padding: 3rem 5rem 2rem 5rem;
      }

      @media (max-width: 480px) {
        padding: 2rem 1rem 1.5rem 1rem;
      }
    `;
  }}
`;
export const ContentContainer = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      align-self: stretch;
      background: #ffffff;
      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 480px) {
        padding: 0 1rem;
      }
    `;
  }}
`;

export const Container = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      padding: 0 0 5.5rem 0;
      flex-direction: column;
      align-items: center;
      align-self: stretch;
      border-radius: 1rem;
      background: white;

      @media (max-width: 768px) {
        padding: 0 0 3rem 0;
      }

      @media (max-width: 480px) {
        padding: 0 0 2rem 0;
      }
    `;
  }}
`;

export const SubTitleContainer = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      max-width: 100%;
      align-items: flex-start;
      align-self: flex-start;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 480px) {
        padding: 0 1rem;
      }
    `;
  }}
`;

export const SubTitle = styled.div`
  ${(): DefaultTheme => {
    return css`
      flex: 1 0 0;
      color: black;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    `;
  }}
`;

export const BodyCopy = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      max-width: 100%;
      align-items: flex-start;
      align-self: stretch;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 480px) {
        padding: 0 1rem;
      }
    `;
  }}
`;

export const BodyText = styled.div`
  ${(): DefaultTheme => {
    return css`
      flex: 1 0 0;
      color: black;
      font-size: 1.5rem;
      font-weight: 400;
      text-align: justify;

      @media (max-width: 480px) {cls
        font-size: 0.875rem;
      }
    `;
  }}
`;
