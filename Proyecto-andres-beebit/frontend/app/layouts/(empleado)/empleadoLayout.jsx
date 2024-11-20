// empleadoLayout.js
const EmpleadoLayout = ({ children }) => {
    return (
      <div>
        <header>Header Empleado</header>
        <main>{children}</main>
        <footer>Footer Empleado</footer>
      </div>
    );
  };
  
  export default EmpleadoLayout;
  