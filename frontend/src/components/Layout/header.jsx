
import { HeaderWrapper } from '../../styles/styleHeader';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Dashboard</h1>
      <div className="user-info">
        <div className="avatar">U</div>
        <div className="username">Usuario</div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
