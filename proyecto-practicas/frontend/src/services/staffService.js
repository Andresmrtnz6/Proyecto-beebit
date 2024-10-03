export const getStaff = async () => {
    const res = await fetch(`${process.env.BACKEND_API_URL}/staff`);
    if (!res.ok) {
      throw new Error('Error al obtener el staff');
    }
    return await res.json();
  };
  