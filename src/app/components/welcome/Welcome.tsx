import React from 'react';
import {
  BodyCopy,
  Container,
  ContentContainer,
  ContentFrame,
  SubTitle,
  SubTitleContainer,
} from './Welcome.style';
import PreviewHeader from '../preview-header/PreviewHeader';
import Header from '../header/Header';
import Cards from '../cards/Cards';
import CodeSnippet from '../code-snippet/CodeSnippet';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import { Text } from '@mtnkente/paragon-display';
import { useLogger } from '../../hooks/use-logger';

const Welcome: React.FC = (): React.ReactElement => {
  const logger = useLogger('Welcome');
  logger.info('Welcome to the PWA');

  return (
    <>
      <PreviewHeader />
      <ContentFrame>
        <Container>
          <Header />
          <ContentContainer>
            <SubTitleContainer>
              <Text $fontStyle='body-large-semibold'>PWA pre-packaged services include:</Text>
            </SubTitleContainer>
            <Cards />
            <SubTitleContainer>
              <SubTitle>For your developmental needs, The Native container:</SubTitle>
            </SubTitleContainer>
            <BodyCopy>
              <Text $fontStyle='body-large-regular' $colour='subtle'>
                View is a core UI component in React Native that acts as a flexible container
                supporting layout, styling, touch handling, and accessibility. It maps to the native
                view of each platform and can be nested with other views, containing any number of
                child components.
              </Text>
            </BodyCopy>
            <SubTitleContainer>
              <Text $colour='full' $fontStyle='body-large-semibold'>
                You will use the FeatureAppLoader to consume the feature applications in the
                container
              </Text>
            </SubTitleContainer>
            <CodeSnippet isFeatureAppIntegration={true} />
            <SubTitleContainer>
              <Text $colour='full' $fontStyle='body-large-semibold'>
                You will utilize the WebView to access the PWA within React Native app.
              </Text>
            </SubTitleContainer>
            <CodeSnippet isFeatureAppIntegration={false} />
          </ContentContainer>
        </Container>
      </ContentFrame>
    </>
  );
};

export default Welcome;
