import styled from 'styled-components';
// Paleta de colores refinada
const colors = {
  primary: '#482d82',    // Morado oscuro para elementos principales
  secondary: '#aa1c5d',  // Guindo para acentos
  tertiary: '#00a684',   // Verde para elementos interactivos
  background: '#f8f9fa', // Fondo claro
  text: '#333333',       // Texto oscuro para buena legibilidad
  lightAccent: '#e6e6fa' // Lavanda claro para hover y elementos secundarios
};

export const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
  color: white;
  padding: 0 40px;
  display: flex;
  justify-content:  space-around;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 80px;
  top: 0;
  left: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;

  h1 {
    font-size: 2em;
    margin: 0;
    font-weight: 700;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover .avatar {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
    }

    .avatar {
      background-color: ${colors.secondary};
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.3em;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .username {
      font-size: 1.2em;
      font-weight: 600;
      opacity: 0.9;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
`;