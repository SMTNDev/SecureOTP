import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const registerUser = async (email, password) => {
    return await axios.post(`${API_URL}/auth/register`, { email, password });
};

export const loginUser = async (email, password) => {
    return await axios.post(`${API_URL}/auth/login`, { email, password });
};
