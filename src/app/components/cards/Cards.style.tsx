// import styled, { DefaultTheme, css } from 'styled-components';
// import { Touch, Share, Token, Camera, Bundles } from '@mtnkente/paragon-icons';
// import ExternalLink from './ExternalLink';
// import Google from './Google';

// export const ServiceCardContainer = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       align-items: flex-start;
//       align-content: flex-start;
//       gap: 1rem ${floats['padding-medium']};
//       align-self: stretch;
//       flex-wrap: wrap;
//       margin-bottom: ${floats['margin-2xlarge']};
//       @media (max-width: 768px) {
//         padding: 0 2rem;
//         gap: 1rem;
//       }
//     `;
//   }}
// `;

// export const PrePackagedServiceCard = styled.div`
//   ${({ theme: { floats, colors } }): DefaultTheme => {
//     return css`
//       display: flex;
//       width: 17.75rem;
//       height: 14.4375rem;
//       padding: ${floats['padding-medium']};
//       flex-direction: column;
//       align-items: flex-start;
//       gap: ${floats['margin-large']};
//       border-radius: 1rem;
//       background: ${colors['card-base-elevated-container-colour']};
//       box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.04);
//       overflow: hidden;

//       @media (max-width: 768px) {
//         width: 100%;
//         height: auto;
//         padding: ${floats['padding-small']} ${floats['padding-small']};
//         gap: ${floats['margin-medium']};
//         overflow: auto;
//       }

//       @media (max-width: 480px) {
//         width: 100%;
//         height: auto;
//         padding: ${floats['padding-small']} 1rem;
//         overflow: auto;
//       }
//     `;
//   }}
// `;

// export const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   align-self: stretch;
//   flex-wrap: wrap;
// `;

// export const IconContainer = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       padding: ${floats['padding-medium']};
//       justify-content: center;
//       align-items: center;
//       gap: 0.625rem;
//       border-radius: ${floats['corner-radius-small']};
//       background: #ffcb05;

//       @media (max-width: 768px) {
//         padding: ${floats['padding-small']};
//         gap: 0.5rem;
//       }

//       @media (max-width: 480px) {
//         flex-direction: column;
//         gap: 0.25rem;
//       }
//     `;
//   }}
// `;

// export const GoogleIcon = styled(Google)`
//   width: 2rem;
//   height: 2rem;
// `;

// export const TouchIcon = styled(Touch)`
//   width: 2rem;
//   height: 2rem;
// `;

// export const ShareIcon = styled(Share)`
//   width: 2rem;
//   height: 2rem;
// `;
// export const CapacitorIcon = styled(Bundles)`
//   width: 2rem;
//   height: 2rem;
// `;
// export const CameraIcon = styled(Camera)`
//   width: 2rem;
//   height: 2rem;
// `;

// export const TokenIcon = styled(Token)`
//   width: 2rem;
//   height: 2rem;
// `;

// export const TextTab = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       padding: 0rem 0rem ${floats['padding-none']} ${floats['padding-none']};
//       flex-direction: column;
//       align-items: flex-start;
//       gap: ${floats['margin-medium']};
//       align-self: stretch;
//     `;
//   }}
// `;

// export const TitleContainer = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       max-width: ${floats['1-column-max-width']};
//       align-items: flex-start;
//       gap: 0.625rem;
//       align-self: stretch;
//     `;
//   }}
// `;

// export const Title = styled.div`
//   ${({ theme: { typography, colors } }): DefaultTheme => {
//     return css`
//       flex: 1 0 0;
//       color: ${colors['text-embed-text-colour']};
//       leading-trim: both;
//       text-edge: cap;
//       ${typography['label-small-bold']};
//     `;
//   }}
// `;

// export const SubTextContainer = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       max-width: ${floats['1-column-max-width']};
//       align-items: flex-start;
//       gap: 0.625rem;
//       align-self: stretch;
//     `;
//   }}
// `;

// export const Redirect = styled.div`
//   ${({ theme: { floats } }): DefaultTheme => {
//     return css`
//       display: flex;
//       padding: 0.25rem ${floats['padding-xsmall']};
//       align-items: center;
//       gap: ${floats['margin-2xsmall']};
//       border-radius: ${floats['corner-radius-xsmall']};
//       background: #e9e9e9;

//       @media (max-width: 768px) {
//         padding: 0.25rem ${floats['padding-small']};
//         gap: ${floats['margin-xsmall']};
//         margin: 0.5rem;
//       }

//       @media (max-width: 480px) {
//         padding: 0.35rem ${floats['padding-xsmall']};
//         gap: ${floats['margin-xxsmall']};
//         margin: 0.25rem;
//       }
//     `;
//   }}
// `;

// export const TextLink = styled.div`
//   ${({ theme: { typography } }): DefaultTheme => {
//     return css`
//       color: #000;
//       font-style: normal;
//       font-weight: 700;
//       &:hover {
//         text-decoration: underline;
//       }
//       ${typography['label-small-bold']};
//     `;
//   }};
// `;

// export const Link = styled(ExternalLink)`
//   width: 0.75rem;
//   height: 0.75rem;
// `;
