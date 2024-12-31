import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="loader"></div>
            <style jsx>{`
                .spinner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .loader {
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #007bff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Spinner;

