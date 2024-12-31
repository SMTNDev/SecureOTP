import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const sendOTP = async (email) => {
    return await axios.post(`${API_URL}/otp/send`, { email });
};

export const verifyOTP = async (email, otp) => {
    return await axios.post(`${API_URL}/otp/verify`, { email, otp });
};

