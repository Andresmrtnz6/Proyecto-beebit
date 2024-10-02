'use client';
import { useEffect, useState } from 'react';
import { getParticipan } from '../..//services/participanService'; // Importa el servicio que acabas de crear

const ParticipanPage = () => {
  const [participan, setParticipan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipan = async () => {
      try {
        const data = await getParticipan();
        setParticipan(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchParticipan();
  }, []);

  if (loading) {
    return <p>Cargando participantes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Participantes</h1>
      {participan.length > 0 ? (
        <ul className="space-y-4">
          {participan.map((item) => (
            <li key={`${item.id_proyecto}-${item.id_staff}`} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold">Proyecto ID: {item.id_proyecto}</h2>
              <p><strong>Staff ID:</strong> {item.id_staff}</p>
              <p><strong>Fecha de Participación:</strong> {item.Fecha_participacion}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay participantes disponibles en este momento.</p>
      )}
    </div>
  );
};

export default ParticipanPage;
