import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getUserProfile = async (token) => {
    return await axios.get(`${API_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const updateUserProfile = async (token, data) => {
    return await axios.put(`${API_URL}/users/profile`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
