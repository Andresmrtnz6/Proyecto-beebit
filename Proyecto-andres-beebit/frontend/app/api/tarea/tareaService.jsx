// frontend/api/tareaService.js
import apiClient from '../apiClient.jsx';



const tareaService = {
    getAll: async () => {
        try {
            const response = await apiClient.get('/tarea');
            return response.data;
        } catch (error) {
            console.error('Error fetching tareas:', error);
            throw error;
        }
    },

    getById: async (uuid) => {
        try {
            const response = await apiClient.get(`/tarea/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching tarea with id ${uuid}:`, error);
            throw error;
        }
    },

    create: async (tareaData) => {
        try {
            const response = await apiClient.post('/tarea', tareaData);
            return response.data;
        } catch (error) {
            console.error('Error creating tarea:', error);
            throw error;
        }
    },

    update: async (uuid, tareaData) => {
        try {
            const response = await apiClient.put(`/tarea/${uuid}`, tareaData);
            return response.data;
        } catch (error) {
            console.error(`Error updating tarea with id ${uuid}:`, error);
            throw error;
        }
    },

    delete: async (uuid) => {
        try {
            const response = await apiClient.delete(`/tarea/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting tarea with id ${uuid}:`, error);
            throw error;
        }
    },
};

export default tareaService;
