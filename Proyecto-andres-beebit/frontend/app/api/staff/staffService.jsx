// frontend/api/staffService.js
import apiClient from '../apiClient.jsx';



const staffService = {
    login: async (credentials) => {
        try {
            const response = await apiClient.post('/staff/login', credentials);
            const { token } = response.data;
            localStorage.setItem('token', token);
            return response.data;
        } catch (error) {
            console.error('Error logging in staff:', error);
            throw error;
        }
    },

    getAll: async () => {
        try {
            const response = await apiClient.get('/staff');
            return response.data;
        } catch (error) {
            console.error('Error fetching staff:', error);
            throw error;
        }
    },

    getById: async (uuid) => {
        try {
            const response = await apiClient.get(`/staff/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching staff with id ${uuid}:`, error);
            throw error;
        }
    },

    create: async (staffData) => {
        try {
            const response = await apiClient.post('/staff', staffData);
            return response.data;
        } catch (error) {
            console.error('Error creating staff:', error);
            throw error;
        }
    },

    update: async (uuid, staffData) => {
        try {
            const response = await apiClient.put(`/staff/${uuid}`, staffData);
            return response.data;
        } catch (error) {
            console.error(`Error updating staff with id ${uuid}:`, error);
            throw error;
        }
    },

    delete: async (uuid) => {
        try {
            const response = await apiClient.delete(`/staff/${uuid}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting staff with id ${uuid}:`, error);
            throw error;
        }
    },
};

export default staffService;
