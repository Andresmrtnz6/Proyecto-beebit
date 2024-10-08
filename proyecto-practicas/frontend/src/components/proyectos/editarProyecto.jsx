import React from 'react';
import { useRouter } from 'next/router';

const EditarProyectoButton = ({ id }) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/proyectos/edit/${id}`);
    };

    return (
        <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-200">
            Editar
        </button>
    );
};

export default EditarProyectoButton;
