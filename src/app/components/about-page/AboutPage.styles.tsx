import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f5ecff, #e8dbff);
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const AboutContent = styled.div`
  max-width: 800px;
  color: #2e004f;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #6a0dad;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 1rem;
  color: #3a006f;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Highlight = styled.span`
  color: #9b30ff;
  font-weight: 600;
`;
