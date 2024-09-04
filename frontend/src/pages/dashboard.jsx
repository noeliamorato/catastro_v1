import { useState } from 'react';
import Layout from "../components/Layout/layout";
import Nav from "../components/Dashboard/nav";
import Usuario from "../components/Dashboard/usuario";
import Predio from '../components/Dashboard/predio';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('nav');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'nav':
        return <Nav />;
      case 'usuario':
        return <Usuario />;
      case 'predio':
        return <Predio />;
      default:
        return <Nav />;
    }
  };

  return (
    <Layout setActiveComponent={setActiveComponent}>  
      {renderComponent()}
    </Layout>
  );
};

export default Dashboard;
