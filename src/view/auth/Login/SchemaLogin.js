import * as yup from "yup";

export const loginSchema= yup.object({
    password: yup.string().min(6, 'La contraseña debe tener minimo 6 caracteres').required('Este campo es requerido'),
email: yup.string().email('Ingrese un email valido').required('Este campo es requerido'),

}).required();


