import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/userService';
import { getToken } from '../utils/authUtils';
import { toast } from 'react-toastify';

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const token = getToken();
            try {
                const res = await getUserProfile(token);
                setProfile(res.data);
            } catch (err) {
                toast.error('Failed to load profile');
            }
        };
        fetchProfile();
    }, []);

    const handleUpdate = async () => {
        const token = getToken();
        try {
            await updateUserProfile(token, profile);
            toast.success('Profile updated successfully!');
        } catch (err) {
            toast.error('Failed to update profile');
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <input
                type="text"
                value={profile.email || ''}
                readOnly
            />
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default Profile;
