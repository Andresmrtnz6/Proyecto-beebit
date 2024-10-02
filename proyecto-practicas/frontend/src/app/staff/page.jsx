'use client';

import { useEffect, useState } from 'react';
import { getStaff } from '../../services/staffService'; 

const StaffPage = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await getStaff();
        setStaff(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return <p>Cargando staff...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Staff</h1>
      {staff.length > 0 ? (
        <ul className="space-y-4">
          {staff.map((miembro) => (
            <li key={miembro.id_staff} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold">
                {miembro.Nombre} {miembro.Apellidos}
              </h2>
              <p><strong>DNI:</strong> {miembro.DNI}</p>
              <p><strong>Teléfono:</strong> {miembro.Telefono}</p>
              <p><strong>Fecha de Nacimiento:</strong> {miembro.Fecha_nacimiento}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay miembros de staff disponibles en este momento.</p>
      )}
    </div>
  );
};

export default StaffPage;

