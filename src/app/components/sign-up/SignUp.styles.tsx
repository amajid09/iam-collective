/* eslint-disable */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #fbd2e1, #d8f3d1);
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: #d31875;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-right: 2rem;

  img {
    width: 80%;
    max-width: 350px;
    border-radius: 1.5rem;
    z-index: 1;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    height: 220px;

    img {
      width: 60%;
      max-width: 180px;
    }
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #d31875;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;
`;

export const TextInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #d31875;
    box-shadow: 0 3px 10px rgba(211, 24, 117, 0.2);
  }
`;

export const SelectInput = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  font-size: 1rem;
  outline: none;
  background: #fafafa;

  &:focus {
    border-color: #d31875;
    box-shadow: 0 3px 10px rgba(211, 24, 117, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background: #d31875;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e27171;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const StepNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const PinkButton = styled.button`
  background: #d31875;
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    background: #e27171;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CountrySelectWrapper = styled.div`
  position: relative;
`;

export const CountryDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const CountryOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }

  img {
    width: 24px;
    height: 16px;
    object-fit: cover;
    border-radius: 2px;
  }
`;

export const CountrySelectorButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    border-color: #d31875;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 24px;
    height: 16px;
    object-fit: cover;
    border-radius: 2px;
  }
`;
