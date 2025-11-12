import React from 'react';
import { FooterContainer, LegalLinks, Disclaimer } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Disclaimer>
        Important: The I AM Collective is a learning and support community. We do not provide
        emergency services, medical care or legal advice. If you are in immediate danger, please
        contact local emergency services or a trusted GBV helpline in your country.
      </Disclaimer>
      <LegalLinks>
        <a
          href='/privacy'
          title='Find out what information we collect, how we use it, and how we keep your stories and data safe.'
        >
          Privacy Notice
        </a>
        <a
          href='/terms'
          title='The rules for using this site, what you can expect from us, and what we expect from you as a member.'
        >
          Terms of Use
        </a>
        <a
          href='/guidelines'
          title='How we create a safe, respectful community together – including what is not allowed and how we handle harm.'
        >
          Community Guidelines
        </a>
        <a
          href='/cookies'
          title='Learn how we use cookies to make this site work, improve content, and understand how the platform is used.'
        >
          Cookies
        </a>
        <a
          href='/support'
          title='If you are in danger or need urgent support, find emergency services and helplines in your country here.'
        >
          Need Help Now?
        </a>
      </LegalLinks>
    </FooterContainer>
  );
};

export default Footer;
