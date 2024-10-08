'use client'

import { useState, useEffect } from 'react';
import EditarProyectoButton from '../../components/proyectos/editarProyecto';
import EliminarProyectoButton from '../../components/proyectos/eliminarProyecto';

const ProyectosPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [proyecto, setProyecto] = useState({
    nombre: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: '',
    presupuesto: '0',
  });

  const [visible, setVisible] = useState(false);


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/proyectos`)
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error('Error al obtener proyectos:', error));
  }, []);

  const handleCreate = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/proyectos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proyecto),
    })
      .then((res) => res.json())
      .then((data) => setProyectos([...proyectos, data]))
      .catch((error) => console.error('Error al crear proyecto:', error));
    setVisible(false);
  };

  return (
    <div className="p-5 text-white">
      <h1 className="text-4xl font-bold text-center">Gestión de Proyectos</h1>
      <button
        label="Crear Proyecto"
        icon="pi pi-plus"
        className="p-button-success mb-4"
        onClick={() => setVisible(true)}
      >
        Crear Proyecto
      </button>
      {visible && (
        <div className="dialog bg-white rounded-lg shadow-lg p-5 mb-4">
          <div className="mb-4">
            <label htmlFor="nombre" className="text-gray-800">
              Nombre:
            </label>
            <input
              id="nombre"
              className="input-field"
              value={proyecto.nombre}
              onChange={(e) => setProyecto({ ...proyecto, nombre: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="text-gray-800">
              Descripción:
            </label>
            <input
              id="descripcion"
              className="input-field"
              value={proyecto.descripcion}
              onChange={(e) => setProyecto({ ...proyecto, descripcion: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha_inicio" className="text-gray-800">
              Fecha Inicio:
            </label>
            <input
              id="fecha_inicio"
              type="date"
              className="input-field"
              value={proyecto.fecha_inicio}
              onChange={(e) => setProyecto({ ...proyecto, fecha_inicio: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fecha_fin" className="text-gray-800">
              Fecha Fin:
            </label>
            <input
              id="fecha_fin"
              type="date"
              className="input-field"
              value={proyecto.fecha_fin}
              onChange={(e) => setProyecto({ ...proyecto, fecha_fin: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="presupuesto" className="text-gray-800">
              Presupuesto:
            </label>
            <input
              id="presupuesto"
              type="number"
              className="input-field"
              value={proyecto.presupuesto}
              onChange={(e) => setProyecto({ ...proyecto, presupuesto: e.target.value })}
            />
          </div>
          <button
            className="p-button-success"
            onClick={handleCreate}
          >
            Guardar
          </button>
        </div>
      )}
      {/* Tabla de Proyectos */}
      <table className="table-auto w-full text-white border-collapse border-spacing-2 border border-slate-400 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Fecha Inicio</th>
            <th className="px-4 py-2">Fecha Fin</th>
            <th className="px-4 py-2">Presupuesto</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id_proyecto} className="bg-black hover:bg-gray-900 text-gray-300">
              <td className="px-4 py-2">{proyecto.id_proyecto}</td>
              <td className="px-4 py-2">{proyecto.nombre}</td>
              <td className="px-4 py-2">{proyecto.descripcion}</td>
              <td className="px-4 py-2">{proyecto.fecha_inicio}</td>
              <td className="px-4 py-2">{proyecto.fecha_fin}</td>
              <td className="px-4 py-2">{proyecto.presupuesto}</td>
              <td className="px-4 py-2">
                <EditarProyectoButton proyectoId={proyecto.id_proyecto} />
                <EliminarProyectoButton proyectoId={proyecto.id_proyecto} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProyectosPage;
