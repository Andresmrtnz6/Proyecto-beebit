'use client';
// frontend/src/app/proyectos/page.jsx

import { useEffect, useState } from 'react';


const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch('http://localhost:4000/proyectos'); // URL de la API del backend
        const data = await response.json();
        setProyectos(data);
      } catch (error) {
        console.error('Error al obtener los proyectos:', error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8">Proyectos</h2>
      {proyectos.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proyectos.map((proyecto) => (
            <li key={proyecto.id_proyecto} className="shadow-lg p-4 bg-gray-800">
              <h3 className="text-lg font-bold">{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <p>Presupuesto: {proyecto.presupuesto}</p>
              <p>Fecha Inicio: {new Date(proyecto.fecha_inicio).toLocaleDateString()}</p>
              <p>Fecha Fin: {new Date(proyecto.fecha_fin).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No hay proyectos disponibles en este momento.</p>
      )}
    </div>
  );
};

export default Proyectos;
