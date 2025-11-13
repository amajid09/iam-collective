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
  background: #fef9fb;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Info = styled.span`
  font-weight: 400;
  text-transform: none;
`;

export const Form = styled.form`
  flex-direction: column;
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

export const Section = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

export const MessageBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  max-height: 250px;
  overflow-y: auto;
  background-color: #fafafa;
`;

export const MessageItem = styled.div`
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
`;

export const MessageDate = styled.span`
  display: block;
  font-size: 0.8rem;
  color: #888;
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const MessageInput = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
`;

export const Avatar = styled.div`
  margin-bottom: 1rem;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
  border-color: #ff69b4;
  margin: auto;
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

export const DeleteButton = styled.button`
  background: transparent;
  color: #b91465;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpButton = styled.button`
  background: transparent;
  color: #b91465;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const NoUserContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  min-height: 100vh;
  background: #fef9fb;
`;
