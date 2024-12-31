import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const OTPVerify = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');

    const handleVerifyOTP = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/otp/verify', {
                email,
                otp,
            });

            toast.success('OTP verified successfully!');
        } catch (err) {
            toast.error(err.response.data.message || 'OTP verification failed!');
        }
    };

    return (
        <div>
            <h1>Verify OTP</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
    );
};

export default OTPVerify;
