import styled, { DefaultTheme, css } from 'styled-components';

export const Codesnippet = styled.div`
  ${({ theme: { floats, colors } }): DefaultTheme => {
    return css`
      display: flex;
      height: auto; /* Height becomes flexible */
      width: 100%; /* Allows full responsiveness */
      margin-bottom: 14px;
      padding: ${floats['padding-medium']};
      flex-direction: column;
      align-items: flex-start;
      gap: ${floats['margin-none']};
      align-self: auto;
      border-radius: ${floats['corner-radius-xsmall']};
      background: ${colors['colour-opacity-lowest-inverse']};

      @media (max-width: 768px) {
        width: 100%; /* Full width on mobile */
        padding: ${floats['padding-small']}; /* Adjust padding for smaller screens */
      }
    `;
  }}
`;

export const StyledPre = styled.pre`
  margin: 0;
  font-size: clamp(12px, 2vw, 14px); /* Scales font size */
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  overflow: auto; /* Enables scrolling when necessary */
  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar */
  }

  @media (max-width: 768px) {
    font-size: clamp(10px, 2vw, 12px); /* Smaller font size on mobile */
  }
`;

export const Text = styled.code`
  .token.tag {
    color: #905;
  } /* Color for JSX tags like FeatureAppLoader */
  .token.attr-name {
    color: #690;
  } /* Color for attribute names */
  .token.attr-value {
    color: #07a;
  } /* Color for attribute values */
  .token.punctuation {
    color: #999;
  } /* Color for punctuation */
  .token.properties {
    color: #690;
  } /* Color for function names */
  .token.keyword {
    color: #690;
  } /* Color for keywords */
  .token.string {
    color: #07a;
  }
`;
