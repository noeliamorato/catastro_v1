import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const SidebarContainer = styled.div`
  padding: 20px;
  position: fixed;
  top: 100px; /* Ajusta esto según el tamaño del header */
  left: 0;
  z-index: 900;
`;

export const MainContent = styled.main`
  margin-left: 220px; /* Alineado con el ancho del sidebar */
  padding: 20px;
  background-color: #f3f4f6; /* Fondo claro para contraste */
  min-height: 100vh;
  transition: margin-left 0.3s ease;
  overflow: auto;
`;
