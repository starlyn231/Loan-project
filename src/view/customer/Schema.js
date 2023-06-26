import * as yup from "yup";

export const SchemaCustomer = yup.object({
    name:yup.string().required('Este campo es requerido'),
    lastName:yup.string().required('Este campo es requerido'),
    job:yup.string().required('Este campo es requerido'),
  address: yup.string().required('Este campo es requerido'),
  cedula: yup.string().required('Este campo es requerido'),
  province: yup.string().required('Este campo es requerido'),
  country: yup.string().required('Este campo es requerido'),
  sector: yup.string().required('Este campo es requerido'),
  phone: yup.string().required('Este campo es requerido'),
  salary: yup.string().required('Este campo es requerido'),
email: yup.string().email('Ingrese un email valido').required('Este campo es requerido'),

}).required();


