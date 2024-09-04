
const roles = {
    ADMINISTRADOR: 'admin',
    CONSULTA: 'consulta',
  };
  
  const permissions = {
    [roles.ADMINISTRADOR]: ['ARCHIVO', 'REPORTES', 'BUSCADOR', 'ROLES', 'ADMINISTRACION', 'DOCUMENTOS', 'TRANSACCIONES'],
    [roles.CONSULTA]: ['DOCUMENTOS', 'TRANSACCIONES'],
  };
  
  export { roles, permissions };
  