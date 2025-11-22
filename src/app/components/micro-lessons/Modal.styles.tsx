import styled, { DefaultTheme } from 'styled-components';
const color = '#ff69b4';
// Overlay
export const Modal = styled.div<{ active?: boolean }>`
  display: ${({ active }): DefaultTheme => (active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  align-items: center;
  justify-content: center;
`;
export const CustomToastWrapper = styled.div<{ $bgColor?: string; $textColor?: string }>`
  padding: 16px 24px;
  border-radius: 8px;
  background-color: ${({ $bgColor }): DefaultTheme => $bgColor || '#4caf50'};
  color: ${({ $textColor }): DefaultTheme => $textColor || 'white'};
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;
export const ModalContainer = styled.div`
  background: white;
  border-radius: 24px;
  max-width: 75%;
  overflow: hidden;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`
// Modal Box
export const ModalContent = styled.div`
  overflow-y: auto;
  padding: 40px;
  flex: 1;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  /* Optional: style the scrollbar nicely */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

// Close Button
export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #718096;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: #f7fafc;
    color: #2d3748;
  }
`;

// Header
export const ModalHeader = styled.div`
  margin-bottom: 32px;
`;

export const ModalDayNumber = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #ff69b4;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ModalTheme = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #1a202c;
  margin: 0 0 12px 0;
`;

export const ModalNotification = styled.p`
  font-size: 16px;
  color: #4a5568;
  font-style: italic;
  margin: 0;
`;
// Sections
export const Section = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  background: #f7fafc;
  border-radius: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${color};
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #2d3748;
  line-height: 1.6;
  margin: 0;
`;

// Reflection Input
export const ReflectionInput = styled.textarea`
  max-width: 85%;
  width: 100%;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${color};
  }
`;

// Complete Button
export const CompleteButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(135deg, #fbd8e7, 0%, #ff69b4 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 24px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

// Social Hook
export const SocialHook = styled.button`
all: unset;
padding: 16px 32px;
cursor: pointer;
  text-align: center;
  padding: 20px;
  border: 1px solid black;
  color: black;
  width: 80%;
  /* background-color: #ff4f9a; */
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
`;

// Footer
export const Footer = styled.div`
  text-align: center;
  padding: 32px 24px;
  color: white;
  font-size: 14px;
  opacity: 0.9;
`;
