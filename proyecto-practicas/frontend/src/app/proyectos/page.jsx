'use client';

import { useEffect, useState } from 'react';
import { getProyectos } from '../../services/proyectosService'; 

const ProyectosPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const data = await getProyectos();
        setProyectos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  if (loading) {
    return <p>Cargando proyectos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">Proyectos</h1>
      <ul className="space-y-4">
        {proyectos.map((proyecto) => (
          <li key={proyecto.id_proyecto} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{proyecto.Nombre}</h2>
            <p>{proyecto.Descripcion}</p>
            <p>
              Fecha de inicio: <span className="font-bold">{proyecto.Fecha_inicio}</span>
            </p>
            <p>
              Fecha de fin: <span className="font-bold">{proyecto.Fecha_fin}</span>
            </p>
            <p>
              Presupuesto: <span className="font-bold">${proyecto.Presupuesto}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProyectosPage;
