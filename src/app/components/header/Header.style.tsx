import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 2vw, 1.75rem);
  padding: 8px 4vw;
  align-self: stretch;
  border-radius: 1rem 1rem 0 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    padding: 16px 2rem;
    margin-top: 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 8px 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    margin-top: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 8px 0.5rem;
    gap: 1rem;
    margin-top: 0.25rem;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  position: relative;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const Headline = styled.div`
  display: flex;
  align-items: flex-start;
  gap: clamp(0.5rem, 1vw, 0.625rem);
  width: 100%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  padding: 0.5rem;
  right: 1rem;
  top: 45%;
  transform: translateY(-50%);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid purple;
`;
