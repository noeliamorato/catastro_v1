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


export const SidebarWrapper = styled.aside`
  background-color: #ffffff;
  color: ${colors.text};
  height: calc(100vh - 80px);
  width: 150px;
  position: fixed;
  top: 80px;
  left: ${props => (props.isOpen ? '0' : '-280px')};
  padding: 30px;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  z-index: 900;
  overflow-y: auto;

  .toggle-btn {
    position: absolute;
    top: 20px;
    right: -50px;
    background-color: ${colors.tertiary};
    color: white;
    border: none;
    border-radius: 0 10px 10px 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.secondary};
      width: 55px;
    }

    .icon {
      font-size: 1.6em;
      transition: transform 0.3s ease;
    }

    &:hover .icon {
      transform: scale(1.1);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 50px;
  }

  ul li {
    margin: 20px 0;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    padding: 12px 15px;
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.lightAccent};
      color: ${colors.primary};
      transform: translateX(5px);
    }
  }
`;

// Nuevo componente para botones elegantes
export const ElegantButton = styled.button`
  background-color: ${colors.tertiary};
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 166, 132, 0.2);

  &:hover {
    background-color: ${colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(170, 28, 93, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Nuevo componente para inputs estilizados
export const StylishInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  font-size: 1.1em;
  border: 2px solid ${colors.lightAccent};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
    box-shadow: 0 0 10px rgba(0, 166, 132, 0.1);
  }
`;