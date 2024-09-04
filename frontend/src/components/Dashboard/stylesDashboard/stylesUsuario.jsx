import styled, { keyframes } from 'styled-components';

// Paleta de colores sofisticada
const colors = {
  primary: '#3a506b',
  secondary: '#5bc0be',
  background: '#f0f5f9',
  text: '#1c2541',
  accent: '#6fffe9',
  error: '#ff6b6b',
  success: '#4ecdc4'
};

// Animaciones
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const FormContainer = styled.div`
  margin: 2rem auto;
  padding: 20px;
  border: none;
  border-radius: 15px;
  max-width: 900px;
  background-color: ${colors.background};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${slideUp} 0.5s ease-out;
`;

export const Input = styled.input`
  display: block;
  width: 90%;
  padding: 12px 15px;
  margin: 15px 0;
  border: 2px solid ${colors.primary}40;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
    box-shadow: 0 0 0 3px ${colors.secondary}40;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  margin-top: 15px;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  & > button {
    margin-left: 15px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  animation: ${slideUp} 0.4s ease-out;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  color: ${colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.error};
  }
`;

const slideInNotification = keyframes`
  from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
  to { transform: translateX(-50%) translateY(0); opacity: 1; }
`;

export const Notification = styled.div`
  background-color: ${props => props.type === 'error' ? colors.error : colors.success};
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  max-width: 90%;
  z-index: 1000;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  animation: ${slideInNotification} 0.5s ease-out;
`;

// Nuevo componente para títulos de sección
export const SectionTitle = styled.h2`
  color: ${colors.primary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${colors.secondary};
  }
`;

// Componente mejorado para mensajes de error en formularios
export const ErrorMessage = styled.p`
  color: ${colors.error};
  font-size: 0.9rem;
  margin-top: 5px;
  text-align: left;
  animation: ${fadeIn} 0.3s ease-out;
`;