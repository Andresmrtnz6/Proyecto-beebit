// dashboard.js para empleados
import { withAuth } from '../../utils/auth';
import EmpleadoLayout from '../../layouts/(empleado)/empleadoLayout.jsx';

const EmpleadoDashboard = () => {
  return (
    <EmpleadoLayout>
      <h1>Bienvenido Empleado</h1>
    </EmpleadoLayout>
  );
};

export default withAuth(EmpleadoDashboard);
