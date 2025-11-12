import styled from 'styled-components';

export const ScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
  padding: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`;

export const StyledPostButton = styled.div`
  margin-top: 10;
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  background-color: #ff69b4;
`;

export const StyledPopUpCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 350px;
  z-index: 20;
  text-align: center;
  border-color: #ff69b4;
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: white;
  border-radius: 2rem;
  margin-top: -6rem;
  padding: 1rem;
  z-index: 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
`;

export const PinkButton = styled.button`
  background-color: #ffd7e8;
  color: #1a1a1a;
  padding: 20px 33px;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    background-color: #ffbfdc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StyledScroller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--app-container-vertical-margin-small, 8px);
  align-self: stretch;
  overflow: auto;
  scrollbar-width: none;
  flex: 1;
`;

export const SuggestedTitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  font-weight: 750;
`;
