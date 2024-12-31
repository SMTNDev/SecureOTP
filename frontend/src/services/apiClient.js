import axios from 'axios';
import { getToken, logout } from '../utils/authUtils';
import { toast } from 'react-toastify';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            logout();
            toast.error('Session expired. Please login again.');
            window.location.href = '/login';
        } else {
            toast.error(error.response.data.message || 'An error occurred');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
