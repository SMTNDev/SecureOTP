import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async () => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, {
                email,
                password,
            });
            toast.success('Registration successful! Please login.');
            router.push('/login');
        } catch (err) {
            toast.error(err.response.data.message || 'Registration failed!');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
