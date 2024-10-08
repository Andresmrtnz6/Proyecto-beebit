'use client';

import { useState, useEffect } from 'react';
import EditarStaffButton from '../../components/staff/editarStaff';
import EliminarStaffButton from '../../components/staff/eliminarStaff';

const StaffPage = () => {
  const [staff, setStaff] = useState([]);  
  const [miembro, setMiembro] = useState({
    id_staff: '',
    dni: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    fecha_nacimiento: '',
  });

  const [visible, setVisible] = useState(false);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  

  // Efecto para obtener el staff desde la API cuando el componente se monta
  useEffect(() => {
    setError(null); 
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/staff`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al obtener los datos');
        }
        return res.json();
      })
      .then((data) => setStaff(data))
      .catch((error) => {
        console.error('Error al obtener el staff:', error);
        setError('No se pudo obtener los datos del staff');
      });
  }, []);

  const handleCreate = async () => {
    setLoading(true);  // Deshabilita el botón y comienza el estado de carga
    setError(null); // Resetea el estado de error antes de hacer la petición
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/staff`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(miembro),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al crear el miembro del staff');
        }
        return res.json();
      })
      .then((data) => {
        setStaff([...staff, data]);  // Actualiza el estado con el nuevo miembro
        setMiembro({  // Resetea los campos del formulario
          id_staff: '',
          dni: '',
          nombre: '',
          apellidos: '',
          telefono: '',
          fecha_nacimiento: '',
        });
      })
      .catch((error) => {
        console.error('Error al crear miembro del staff:', error);
        setError('Error al crear el miembro. Por favor, intenta de nuevo.');
      })
      .finally(() => {
        setVisible(false);  // Oculta el formulario
        setLoading(false);  // Reactiva el botón
      });
  };

  return (
    <div className="p-5 text-white">
      <h1 className="text-4xl font-bold text-center">Gestión de Staff</h1>

      {/* Botón para agregar un nuevo miembro */}
      <button
        className="p-button-success mb-4"
        onClick={() => setVisible(true)}
      >
        Agregar Miembro
      </button>

      {/* Mostrar el formulario solo si 'visible' es true */}
      {visible && (
        <div className="dialog bg-white rounded-lg shadow-lg p-5 mb-4">
          <div className="mb-4">
            <label htmlFor="nombre" className="text-gray-800">Nombre:</label>
            <input
              id="nombre"
              className="input-field"
              value={miembro.nombre}
              onChange={(e) => setMiembro({ ...miembro, nombre: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="apellidos" className="text-gray-800">Apellidos:</label>
            <input
              id="apellidos"
              className="input-field"
              value={miembro.apellidos}
              onChange={(e) => setMiembro({ ...miembro, apellidos: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dni" className="text-gray-800">DNI:</label>
            <input
              id="dni"
              className="input-field"
              value={miembro.dni}
              onChange={(e) => setMiembro({ ...miembro, dni: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="text-gray-800">Teléfono:</label>
            <input
              id="telefono"
              type="tel"
              className="input-field"
              value={miembro.telefono}
              onChange={(e) => setMiembro({ ...miembro, telefono: e.target.value })}
            />
          </div>

          {/* Botón para guardar, deshabilitado si está cargando */}
          <button
            className="p-button-success"
            onClick={handleCreate}
            disabled={loading}  // Deshabilitar mientras se envía el formulario
          >
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      )}

      {/* Mostrar mensajes de error si los hay */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Tabla del staff */}
      <table className="table-auto w-full text-white border-collapse border-spacing-2 border border-slate-400 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellidos</th>
            <th className="px-4 py-2">DNI</th>
            <th className="px-4 py-2">Teléfono</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {staff.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No hay miembros de staff disponibles.</td>
            </tr>
          ) : (
            staff.map((miembro) => (
              <tr key={miembro.id_staff} className="bg-black hover:bg-gray-900 text-gray-300">
                <td className="px-4 py-2">{miembro.id_staff}</td>
                <td className="px-4 py-2">{miembro.nombre}</td>
                <td className="px-4 py-2">{miembro.apellidos}</td>
                <td className="px-4 py-2">{miembro.dni}</td>
                <td className="px-4 py-2">{miembro.telefono}</td>
                <td className="px-4 py-2">
                  <EditarStaffButton staffId={miembro.id_staff} />
                  <EliminarStaffButton staffId={miembro.id_staff} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPage;
