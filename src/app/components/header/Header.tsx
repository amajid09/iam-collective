import React from 'react';
import {
  HeaderContainer,
  Headline,
  Frame,
  SubTitleContainer,
  HeaderParagraph,
} from './Header.style';
import { Text } from '@mtnkente/paragon-display';

const Header: React.FC = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <Frame>
        <Headline>
          <Text $colour='full' $fontStyle='headline-small'>
            Welcome to your PWA
          </Text>
        </Headline>
        <SubTitleContainer>
          <Text $colour='full' $fontStyle='body-large-semibold'>
            MTN Kente - v1.0.0 - 12/02/2025
          </Text>
        </SubTitleContainer>
        <HeaderParagraph>
          A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an
          app-like experience to users. These apps meet certain requirements such as being
          responsive or installable, are deployed to servers, accessible through URLs, and indexed
          by search engines.
        </HeaderParagraph>
      </Frame>
    </HeaderContainer>
  );
};

export default Header;
