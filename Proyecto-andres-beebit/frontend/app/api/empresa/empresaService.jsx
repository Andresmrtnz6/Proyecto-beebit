// frontend/api/empresaService.js
import apiClient from '../apiClient.jsx';

const empresaService = {
    getAll: async () => {
        try {
            const response = await apiClient.get('/empresa'); // Ajusta si tu backend usa `/empresa`
            return response.data;
        } catch (error) {
            console.error('Error fetching empresas:', error);
            throw error;
        }
    },

    getById: async (uuid) => {
        try {
            const response = await apiClient.get(`/empresa/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching empresa with id ${uuid}:`, error);
            throw error;
        }
    },

    create: async (empresaData) => {
        try {
            const response = await apiClient.post('/empresa', empresaData);
            return response.data;
        } catch (error) {
            console.error('Error creating empresa:', error);
            throw error;
        }
    },

    update: async (uuid, empresaData) => {
        try {
            const response = await apiClient.put(`/empresa/${uuid}`, empresaData);
            return response.data;
        } catch (error) {
            console.error(`Error updating empresa with id ${uuid}:`, error);
            throw error;
        }
    },

    delete: async (uuid) => {
        try {
            const response = await apiClient.delete(`/empresa/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting empresa with id ${uuid}:`, error);
            throw error;
        }
    },
};

export default empresaService;
