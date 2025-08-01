import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalBox = styled.div`
  background-color: ${(props) => props.theme.color.background};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeInUp} 0.4s ease-out;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme.color.primary};
`;

export const TimeText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.primary};
`;

export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ModalButton = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${(props) => props.theme.color.border};
  color: ${(props) => props.theme.color.primary};
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.color.border};
  }
`;
