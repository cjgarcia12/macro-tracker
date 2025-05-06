import * as yup from 'yup';

export const createUserValidation = yup.object({
    username: yup.string().required('A username is required'),
    email: yup.string().email().required('An email is required'),
    password: yup.string().required('A password is required')
})