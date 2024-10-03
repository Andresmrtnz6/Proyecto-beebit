'use client'

import { useEffect, useState } from 'react';
import { getStaff } from '../../services/staffService';

function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await getStaff();
        setStaff(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {staff.length > 0 ? (
          staff.map((miembro) => (
            <div
              key={miembro.id_staff}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold">
                {miembro.Nombre} {miembro.Apellidos}
              </h2>
              <p>
                <strong>DNI:</strong> {miembro.DNI}
              </p>
              <p>
                <strong>Teléfono:</strong> {miembro.Telefono}
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong> {miembro.Fecha_nacimiento}
              </p>
              <div className="mt-4 flex justify-between">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
                  Borrar
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Editar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay miembros de staff disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default StaffPage;
