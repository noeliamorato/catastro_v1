import PropTypes from 'prop-types';
import Header from './header';
import Sidebar from './sidebar';
import { HeaderContainer, SidebarContainer, MainContent } from '../../styles/styleLayout';

const Layout = ({ children, setActiveComponent }) => {
  return (
    <div>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <div style={{ display: 'flex' }}>
        <SidebarContainer>
          <Sidebar setActiveComponent={setActiveComponent} />
        </SidebarContainer>
        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  setActiveComponent: PropTypes.func.isRequired,
};

export default Layout;
