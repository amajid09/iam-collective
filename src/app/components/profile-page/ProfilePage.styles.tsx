/* eslint-disable */
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  min-height: 100vh;
  background: #fef9fb;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #444;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 0.6rem;
`;

export const Select = styled.select`
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 0.6rem;
`;

export const SaveButton = styled.button`
  background: #d31875;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  &:hover {
    background: #b91465;
  }
`;
