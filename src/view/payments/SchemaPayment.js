import * as yup from "yup";

export const SchemaPayment= yup.object({
//  name:yup.string().required('Este campo es requerido'),
  payment:yup.string().required('Este campo es requerido'),
 

}).required();


