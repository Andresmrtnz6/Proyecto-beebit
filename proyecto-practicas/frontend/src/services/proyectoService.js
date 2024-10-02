
export const getProyectos = async () => {

    const res = await fetch('http://backend:4000/api/proyectos'); 
    if (!res.ok) {
      throw new Error('Error al obtener los proyectos');
    }
    return await res.json();
  };
  
  export const editProyecto = async (id, proyectoData) => {
    const res = await fetch(`http://backend:4000/api/proyectos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(proyectoData),
    });
    
    if (!res.ok) {
      throw new Error('Error al actualizar el proyecto');
    }
    return await res.json();
  };
  

export const deleteProyecto = async (id) => {

  const res = await fetch(`http://backend:4000/api/proyectos/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) {
    throw new Error('Error al borrar el proyecto');
  }
};

