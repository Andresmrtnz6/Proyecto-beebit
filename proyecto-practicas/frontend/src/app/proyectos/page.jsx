'use client'

import { useState, useEffect } from 'react';
import EditProyectoForm from '../../components/proyectos/editarProyecto';
import DeleteProyectoButton from '../../components/proyectos/eliminarProyecto';
import { getProyectos, deleteProyecto } from '../../services/proyectoService';



const ProyectosPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingProyecto, setEditingProyecto] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const data = await getProyectos();
        setProyectos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  const handleDelete = async (proyectoId) => {
    try {
      await deleteProyecto(proyectoId);
      setProyectos(proyectos.filter((p) => p.id_proyecto !== proyectoId));
    } catch (error) {
      console.error('Error al borrar el proyecto:', error);
    }
  };

  if (loading) {
    return <p className='text-gray-400'>Cargando proyectos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Proyectos</h1>

      {editingProyecto ? (
        <EditProyectoForm
          proyecto={editingProyecto}
          onSave={(updatedProyecto) => {
            setProyectos(
              proyectos.map((p) =>
                p.id_proyecto === updatedProyecto.id_proyecto ? updatedProyecto : p
              )
            );
            setEditingProyecto(null);
          }}
          onCancel={() => setEditingProyecto(null)}
        />
      ) : (
        <ul className="space-y-4">
          {proyectos.map((proyecto) => (
            <li
              key={proyecto.id_proyecto}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <h2 className="text-xl font-semibold">{proyecto.Nombre}</h2>
              <p><strong>Descripción:</strong> {proyecto.Descripcion}</p>
              <p><strong>Fecha de Inicio:</strong> {proyecto.Fecha_inicio}</p>
              <p><strong>Fecha de Fin:</strong> {proyecto.Fecha_fin}</p>
              <p><strong>Presupuesto:</strong> {proyecto.Presupuesto} €</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setEditingProyecto(proyecto)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Editar
                </button>
                <DeleteProyectoButton
                  proyectoId={proyecto.id_proyecto}
                  onDelete={handleDelete}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProyectosPage;
