// frontend/api/proyectoService.js
import apiClient from '../apiClient.jsx';

const proyectoService = {
    getAll: async () => {
        try {
            const response = await apiClient.get('/proyecto');
            return response.data;
        } catch (error) {
            console.error('Error fetching proyectos:', error);
            throw error;
        }
    },

    getById: async (uuid) => {
        try {
            const response = await apiClient.get(`/proyecto/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching proyecto with id ${uuid}:`, error);
            throw error;
        }
    },

    create: async (proyectoData) => {
        try {
            const response = await apiClient.post('/proyecto', proyectoData);
            return response.data;
        } catch (error) {
            console.error('Error creating proyecto:', error);
            throw error;
        }
    },

    update: async (uuid, proyectoData) => {
        try {
            const response = await apiClient.put(`/proyecto/${uuid}`, proyectoData);
            return response.data;
        } catch (error) {
            console.error(`Error updating proyecto with id ${uuid}:`, error);
            throw error;
        }
    },

    delete: async (uuid) => {
        try {
            const response = await apiClient.delete(`/proyecto/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting proyecto with id ${uuid}:`, error);
            throw error;
        }
    },
};

export default proyectoService;
