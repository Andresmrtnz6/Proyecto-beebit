import React from 'react';

const EliminarStaffButton = ({ id, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este miembro del staff?')) {
            await onDelete(id);
        }
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-red-600 transition ease-in-out duration-200">
            Borrar
        </button>
    );
};

export default EliminarStaffButton;
