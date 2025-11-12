import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #fff0f6, #fdf0f5);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: #20a4cc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* subtle background blobs for extra visual interest */
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.4;
    z-index: 0;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -50px;
    background: radial-gradient(circle, #e27171 0%, transparent 70%);
  }

  &::after {
    width: 250px;
    height: 250px;
    bottom: 0;
    right: -60px;
    background: radial-gradient(circle, #20a4cc 0%, transparent 70%);
  }

  img {
    position: relative;
    width: 70%;
    max-width: 320px;
    z-index: 1;
    border-radius: 1rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    height: 200px;

    &::before,
    &::after {
      display: none;
    }

    img {
      width: 50%;
      max-width: 160px;
    }
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #20a4cc;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #20a4cc;
  margin-bottom: 0.25rem;
`;

export const TextInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e27171;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #111827;
  outline: none;
  background-color: #fff;

  &:focus {
    border-color: #20a4cc;
    box-shadow: 0 3px 10px rgba(32, 164, 204, 0.15);
  }
`;

export const SelectInput = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #e27171;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #111827;
  outline: none;
  background-color: #fff;

  &:focus {
    border-color: #20a4cc;
    box-shadow: 0 3px 10px rgba(32, 164, 204, 0.15);
  }
`;

export const SubmitButton = styled.button`
  background-color: #e27171;
  color: white;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #20a4cc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CountrySelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CountryDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

export const CountryOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }

  img {
    width: 24px;
    height: 16px;
    border-radius: 2px;
    object-fit: cover;
  }
`;

export const CountrySelectorButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    border-color: #888;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    width: 24px;
    height: 16px;
    border-radius: 2px;
    object-fit: cover;
  }
`;
