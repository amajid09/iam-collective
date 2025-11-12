import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #f3e1ff, #ffe4ec);
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #6a0dad;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #7b1fa2; 
  margin-top: 0.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 22rem;
`;

export const OptionCard = styled.button`
background: linear-gradient(to right, #fff0f6, #fdf0f5);
color: #1a1a1a;
padding: 0.75rem 1rem;  
text-align: left;
border-radius: 0.85rem;  
font-size: 0.95rem;      
font-weight: 500;
transition: all 0.25s ease;
box-shadow: 0 3px 10px rgba(255, 105, 180, 0.12);
width: 100%;

&:hover {
  background: linear-gradient(to right, #ffe4ec, #ffd7e8);
  transform: translateY(-2px); 
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.2);
}

@media (max-width: 768px) {
  padding: 0.6rem 0.9rem;
  font-size: 0.9rem;
}
`;

export const OptionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #7b1fa2; 
  margin-bottom: 0.25rem;
`;

export const OptionText = styled.p`
  font-size: 0.95rem;
  color: #9b30ff;
`;

export const Footer = styled.p`
  margin-top: 3rem;
  font-size: 0.8rem;
  color: #6a0dad;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
