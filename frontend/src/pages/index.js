import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to OTP Verification System</h1>
            <Link href="/register">Register</Link>
            <br />
            <Link href="/login">Login</Link>
        </div>
    );
}

