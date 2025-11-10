import styled, { DefaultTheme, css } from 'styled-components';

export const Container = styled.div`
  ${(): DefaultTheme => {
    return css`
      display: flex;
      width: 100%;
      padding: 25px 0px 25px 250px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      position: absolute;
      border-bottom: 1px solid rgba(0, 0, 0, 0.16);
      background: #fff;

      @media (max-width: 1024px) {
        padding: 1.5rem 5%;
      }

      @media (max-width: 768px) {
        padding: 1rem 2%;
        gap: 0.5rem;
      }

      @media (max-width: 480px) {
        flex-direction: column;
        padding: 0.8rem 1rem;
      }
    `;
  }}
`;

export const Frame = styled.div`
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      max-width: 63rem;
      width: 100%;
      align-items: center;
      gap: ${floats['margin-medium']};

      @media (max-width: 768px) {
        gap: ${floats['margin-small']};
      }
    `;
  }}
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const LogoLockup = styled.div`
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      align-items: center;
      gap: ${floats['navigation-rail-logo-lockup-scale-xs-s-logo-margin']};
    `;
  }}
`;
export const DividerContainer = styled.div`
  ${({ theme: { floats } }): DefaultTheme => {
    return css`
      display: flex;
      width: ${floats['divider-container-border']};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: stretch;
    `;
  }}
`;

export const Text = styled.div`
  ${({ theme: { colors, typography } }): DefaultTheme => {
    return css`
      color: ${colors['navigation-rail-logo-lock-up-platform-name-colour']};
      font-size: var(--typescale-caption-m-l-semibold-size, 14px);
      font-style: normal;
      font-weight: 600;
      ${typography['caption-semibold']}
    `;
  }}
`;
