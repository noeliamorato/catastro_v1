
import { useState } from 'react';
import { SidebarWrapper } from '../../styles/styleSidebar';
import { FaBars } from 'react-icons/fa'; // Para el ícono de las tres rayas

const Sidebar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarWrapper isOpen={isOpen}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars className="icon" />
        </button>
        <ul>
          <li onClick={() => setActiveComponent('nav')}>Inicio</li>
          <li onClick={() => setActiveComponent('usuario')}>Usuario</li>
          <li onClick={() => setActiveComponent('predio')}>predio</li>
          <li onClick={() => setActiveComponent('contact')}>Contacto</li>
        </ul>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
