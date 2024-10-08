const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export const getParticipan = async () => {
    const res = await fetch(`${apiUrl}/participan`); 
    if (!res.ok) {
      throw new Error('Error al obtener los participantes');
    }
    return await res.json();
  };
  