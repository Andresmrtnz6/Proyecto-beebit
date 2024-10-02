export const getProyectos = async () => {
    const res = await fetch('http://localhost:4000/api/proyectos'); 
    if (!res.ok) {
      throw new Error('Error al obtener los proyectos');
    }
    return await res.json();
  };
  