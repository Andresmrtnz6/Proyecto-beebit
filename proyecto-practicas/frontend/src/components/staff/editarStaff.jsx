import React from 'react';
import { useRouter } from 'next/router';

const EditarStaffButton = ({ id }) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/staff/edit/${id}`);
    };

    return (
        <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-1 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-200">
            Editar
        </button>
    );
};

export default EditarStaffButton;
