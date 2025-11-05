import React from 'react';
import { Logo } from '@mtnkente/paragon-display';
import {
  Container,
  DividerContainer,
  Frame,
  LogoContainer,
  LogoLockup,
  Text,
} from './PreviewHeader.style';
import { Divider } from '@mtnkente/paragon-layouts';

const PreviewHeader: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Frame>
        <LogoLockup>
          <LogoContainer>
            <Logo $logoType='core' $size='xsmall' $variant='default' />
          </LogoContainer>
          <DividerContainer>
            <Divider $variant='on-surface-full' orientation='vertical' />
          </DividerContainer>
          <Text>Software Solutions</Text>
        </LogoLockup>
      </Frame>
    </Container>
  );
};
export default PreviewHeader;
