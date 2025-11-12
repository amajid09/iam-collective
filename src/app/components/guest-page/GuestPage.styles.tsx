import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #f3e1ff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #e6ccff, #f3e1ff);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const RightPanel = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #6a0dad;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SubmitButton = styled.button`
  background-color: #9b30ff;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7b1fa2;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
