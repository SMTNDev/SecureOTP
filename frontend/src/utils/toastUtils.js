import { toast } from 'react-toastify';

export const successToast = (message) => {
    toast.success(message, { position: 'top-right' });
};

export const errorToast = (message) => {
    toast.error(message, { position: 'top-right' });
};
