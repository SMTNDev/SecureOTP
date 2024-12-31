import React from 'react';

const InputField = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ padding: '10px', margin: '5px 0', width: '100%' }}
        />
    );
};

export default InputField;
