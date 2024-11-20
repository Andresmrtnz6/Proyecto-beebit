// frontend/api/empleadoService.js
import apiClient from '../apiClient.jsx'; // Ajusta la ruta



const empleadoService = {
    // Función para manejar el login
    login: async (credentials) => {
        try {
            const response = await apiClient.post('/empleado/login', credentials);
            const { access_token } = response.data; // Cambié a `access_token` para mayor claridad
            localStorage.setItem('token', access_token); // Almacena el token
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    },

    getAll: async () => {
        try {
            const response = await apiClient.get('/empleado');
            return response.data;
        } catch (error) {
            console.error('Error fetching empleados:', error);
            throw error;
        }
    },

    getById: async (uuid) => {
        try {
            const response = await apiClient.get(`/empleado/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching empleado with id ${uuid}:`, error);
            throw error;
        }
    },

    create: async (empleadoData) => {
        try {
            const response = await apiClient.post('/empleado', empleadoData);
            return response.data;
        } catch (error) {
            console.error('Error creating empleado:', error);
            throw error;
        }
    },

    update: async (uuid, empleadoData) => {
        try {
            const response = await apiClient.put(`/empleado/${uuid}`, empleadoData);
            return response.data;
        } catch (error) {
            console.error(`Error updating empleado with id ${uuid}:`, error);
            throw error;
        }
    },

    delete: async (uuid) => {
        try {
            const response = await apiClient.delete(`/empleado/${uuid}`); // Cambié `id` por `uuid`
            return response.data;
        } catch (error) {
            console.error(`Error deleting empleado with id ${uuid}:`, error);
            throw error;
        }
    },
};

export default empleadoService;
