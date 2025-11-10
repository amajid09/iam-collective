import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.75rem);
  padding: ${({ theme }): string => theme.floats['padding-4xlarge']} 4vw;
  align-self: stretch;
  border-radius: 1rem 1rem 0 0;
  background: url('https://mtncloud.sharepoint.com/:i:/r/sites/S2Enablers/Shared%20Documents/General/Kente%20Platform/Design/Assets/Banner%20Assets/_Archive/header-banner-yellow.jpg?csf=1&web=1&e=S0kkam');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding: ${({ theme }): string => theme.floats['padding-4xlarge']} 2rem;
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }): string => theme.floats['padding-4xlarge']} 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }): string => theme.floats['padding-4xlarge']} 0.5rem;
    gap: 1rem;
    margin-top: 0.25rem;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(0.5rem, 1vw, 0.625rem);
  width: 100%;
  max-width: ${({ theme }): string => theme.floats['1-column-max-width']};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(0.5rem, 1vw, 0.625rem);
  width: 100%;
  max-width: ${({ theme }): string => theme.floats['1-column-max-width']};
  margin-bottom: ${({ theme }): string => theme.floats['margin-xlarge']};

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const HeaderParagraph = styled.div`
  ${({ theme: { colors, typography } }): ReturnType<typeof css> => {
    return css`
      color: ${colors['colour-on-primary']};
      ${typography['title-small-regular']};
      font-size: clamp(0.875rem, 2vw, 1.125rem);
      font-weight: 400;
      line-height: clamp(1.3rem, 1.5vw, 1.6rem);
      max-width: 100%;
      width: min(32.4375rem, 90vw);
      font-style: normal;

      @media (max-width: 768px) {
        font-size: clamp(0.875rem, 1.8vw, 1rem);
        line-height: clamp(1.2rem, 1.4vw, 1.5rem);
      }

      @media (max-width: 480px) {
        font-size: clamp(0.75rem, 2vw, 0.875rem);
        line-height: clamp(1.1rem, 1.3vw, 1.4rem);
      }
    `;
  }}
`;
