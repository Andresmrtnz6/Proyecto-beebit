export const getParticipan = async () => {
    const res = await fetch('http://localhost:4000/api/participan'); 
    if (!res.ok) {
      throw new Error('Error al obtener los participantes');
    }
    return await res.json();
  };
  