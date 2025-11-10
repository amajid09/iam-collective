import React from 'react';
import {
  ServiceCardContainer,
  PrePackagedServiceCard,
  IconContainer,
  Header,
  GoogleIcon,
  TokenIcon,
  TouchIcon,
  ShareIcon,
  TitleContainer,
  TextTab,
  SubTextContainer,
  Redirect,
  TextLink,
  Link,
  CapacitorIcon,
  CameraIcon,
} from './Cards.style';
import { Text } from '@mtnkente/paragon-display';

const Cards: React.FC = (): React.ReactElement => {
  return (
    <ServiceCardContainer>
      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <CapacitorIcon />
          </IconContainer>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              Capacitor
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Add custom native functionality with a simple Plugin API
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        {/* <Header>
          <IconContainer>
            <WebIcon />
          </IconContainer>
        </Header> */}
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              PWA
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              A web-based application that delivers a native app-like experience using web
              technologies.
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <TouchIcon />
          </IconContainer>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              Localisation
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Adapt your application&apos;s user interface for a specific target market.
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <GoogleIcon />
          </IconContainer>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              Google Tag services
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Monitor container activities & adds custom click events for Google tag
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <ShareIcon />
          </IconContainer>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              Shared Services
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Common services that multiple applications can use
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <TokenIcon />
          </IconContainer>
          <Redirect>
            <TextLink>Open Storybook</TextLink>
            <Link />
          </Redirect>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              The Design System
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Examples of design system components include forms, buttons, banners and
              category-headers
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>

      <PrePackagedServiceCard>
        <Header>
          <IconContainer>
            <CameraIcon />
          </IconContainer>
        </Header>
        <TextTab>
          <TitleContainer>
            <Text $colour='full' $fontStyle='label-small-bold'>
              Enabled Native Library
            </Text>
          </TitleContainer>
          <SubTextContainer>
            <Text $colour='subtle' $fontStyle='body-small-regular'>
              Enabled PWA camera, location, and storage access in React Native WebView via Capacitor
              plugins
            </Text>
          </SubTextContainer>
        </TextTab>
      </PrePackagedServiceCard>
    </ServiceCardContainer>
  );
};

export default Cards;
