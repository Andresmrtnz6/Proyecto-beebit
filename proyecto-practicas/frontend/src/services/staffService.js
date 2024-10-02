export const getStaff = async () => {
    const res = await fetch('http://localhost:4000/api/staff');
    if (!res.ok) {
      throw new Error('Error al obtener el staff');
    }
    return await res.json();
  };
  