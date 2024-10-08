const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export const getStaff = async () => {
    const res = await fetch(`${apiUrl}/staff`);
    if (!res.ok) throw new Error('Error al obtener el staff');
    return await res.json();
};

export const editStaff = async (id, staffData) => {
    const res = await fetch(`${apiUrl}/staff/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(staffData),
    });
    if (!res.ok) throw new Error('Error al actualizar el staff');
    return await res.json();
};

export const deleteStaff = async (id) => {
    const res = await fetch(`${apiUrl}/staff/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Error al eliminar el staff');
};
