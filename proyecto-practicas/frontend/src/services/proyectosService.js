const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const getProyectos = async () => {
    const res = await fetch(`${apiUrl}/proyectos`);
    if (!res.ok) throw new Error('Error al obtener los proyectos');
    return await res.json();
};

export const editProyecto = async (id, proyectoData) => {
    const res = await fetch(`${apiUrl}/proyectos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proyectoData),
    });
    if (!res.ok) throw new Error('Error al actualizar el proyecto');
    return await res.json();
};

export const deleteProyecto = async (id) => {
    const res = await fetch(`${apiUrl}/proyectos/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Error al eliminar el proyecto');
};
