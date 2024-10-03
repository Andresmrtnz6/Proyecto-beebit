import React, { useState } from 'react';

const DeleteProyectoButton = ({ proyectoId, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      setIsDeleting(true);
      try {
        await deleteProyecto(proyectoId);
        setIsDeleting(false);
        onDelete();
      } catch (error) {
        console.error('Error al borrar el proyecto:', error);
        setIsDeleting(false);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      disabled={isDeleting}
    >
      {isDeleting ? 'Borrando...' : 'Borrar'}
    </button>
  );
};

export default DeleteProyectoButton;

