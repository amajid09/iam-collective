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
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: ${floats['padding-3xlarge']};
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
      background: var(--colour-secondary-inverse, #fff);

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
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      max-width: ${floats['1-column-max-width']};
      align-items: flex-start;
      align-self: flex-start;
      margin-bottom: ${floats['margin-xlarge']};
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
  ${({ theme: { colors, typography } }): DefaultTheme => {
    return css`
      flex: 1 0 0;
      color: ${colors['text-embed-text-colour']};
      ${typography['body-large-semibold']};
      text-align: center;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    `;
  }}
`;

export const BodyCopy = styled.div`
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      max-width: ${floats['1-column-max-width']};
      align-items: flex-start;
      align-self: stretch;
      margin-bottom: ${floats['margin-2xlarge']};
      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 480px) {
        padding: 0 1rem;
      }
    `;
  }}
`;
