import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/register">Register</Link>
                <Link href="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;

