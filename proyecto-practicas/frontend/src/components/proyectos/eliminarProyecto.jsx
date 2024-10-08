import React from 'react';

const EliminarProyectoButton = ({ idProyecto }) => {
    const handleDelete = () => {
      fetch(`/api/proyectos/${idProyecto}`, {
        method: 'DELETE',
      }).then(() => {
        window.location.reload();
      });
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-red-600 transition ease-in-out duration-200">
            Borrar
        </button>
    );
};

export default EliminarProyectoButton;
