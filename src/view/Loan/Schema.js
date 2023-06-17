import * as yup from "yup";

export const SchemaLoan= yup.object({
  name:yup.string().required('Este campo es requerido'),
 // lastName:yup.string().required('Este campo es requerido'),
  job:yup.string().required('Este campo es requerido'),
cedula: yup.string().required('Este campo es requerido'),
salary:yup.string().required('Este campo es requerido'),
  amount:yup.string().required('Este campo es requerido'),
  loanPayment:yup.string().required('Este campo es requerido'),
  time:yup.string().required('Este campo es requerido'),
  categories: yup.string().required('Este campo es requerido'),
  interestRate: yup.string().required('Este campo es requerido'),
  motiveLoan: yup.string().required('Este campo es requerido'),

}).required();


