// frontend/api/apiClient.js
import axios from 'axios';
import Router from 'next/router';



// Crea una instancia de axios
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});



// Interceptor de solicitud (request)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Recupera el token del almacenamiento
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Añade el token al header
    }
    return config; // Retorna la configuración actualizada
  },
  (error) => {
    return Promise.reject(error); // Maneja errores al preparar la solicitud
  }
);



// Interceptor de respuesta (response)
apiClient.interceptors.response.use(
  (response) => {
    return response; // Devuelve la respuesta si todo está bien
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //si el backend responde con un 401 (no autorizado)
      localStorage.removeItem('token'); //limpia el token
      Router.push('/login'); // Redirige al usuario al login
    }
    return Promise.reject(error);//maneja otros errores

  }
);


export default apiClient;
