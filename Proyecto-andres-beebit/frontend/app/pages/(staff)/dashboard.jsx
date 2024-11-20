// dashboard.js para staff
import { withAuth } from '../../utils/auth';
import StaffLayout from '../../layouts/(staff)/staffLayout.jsx';

const StaffDashboard = () => {
  return (
    <StaffLayout>
      <h1>Bienvenido Staff</h1>
    </StaffLayout>
  );
};

export default withAuth(StaffDashboard);
