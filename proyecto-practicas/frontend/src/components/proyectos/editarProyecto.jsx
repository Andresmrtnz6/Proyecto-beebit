'use client';
import React,{ useState } from 'react';


const EditProyectoForm = ({ proyecto, onSave, onCancel }) => {
  const [nombre, setNombre] = useState(proyecto.Nombre);
  const [descripcion, setDescripcion] = useState(proyecto.Descripcion);
  const [fechaInicio, setFechaInicio] = useState(proyecto.Fecha_inicio);
  const [fechaFin, setFechaFin] = useState(proyecto.Fecha_fin);
  const [presupuesto, setPresupuesto] = useState(proyecto.Presupuesto);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProyecto = {
      Nombre: nombre,
      Descripcion: descripcion,
      Fecha_inicio: fechaInicio,
      Fecha_fin: fechaFin,
      Presupuesto: parseFloat(presupuesto),
    };
    try {
      await updateProyecto(proyecto.id_proyecto, updatedProyecto);
      onSave();
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Editar Proyecto</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nombre del Proyecto</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha de Inicio</label>
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Fecha de Fin</label>
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Presupuesto</label>
        <input
          type="number"
          value={presupuesto}
          onChange={(e) => setPresupuesto(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Guardar
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default EditProyectoForm;
