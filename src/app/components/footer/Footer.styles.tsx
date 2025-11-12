import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2rem 1.5rem;
  background: #f5e9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const Disclaimer = styled.p`
  font-size: 0.85rem;
  color: #4b0082;
  max-width: 800px;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  a {
    font-size: 0.8rem;
    color: #7b1fa2;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #9b30ff;
    }
  }
`;
