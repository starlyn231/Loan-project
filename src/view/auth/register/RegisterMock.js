import * as yup from "yup";

export const FormSchema =
  [
    {
      step: 1,
      validations:
        yup.object({

          name: yup.string().required('Este campo es requerido'),
          email: yup.string().email('Ingrese un email valido').required('Este campo es requerido'),
          password: yup.string().min(6, 'La contraseña debe tener minimo 6 caracteres').required('Este campo es requerido'),
        }).required()
    },
    {
      step: 2,
      validations:
        yup.object({
          companyName: yup.string().required('Este campo es requerido'),
          address: yup.string().required('Este campo es requerido'),
          suite: yup.string().required('Este campo es requerido'),
          country: yup.string().required('Este campo es requerido'),
          province: yup.string().required('Este campo es requerido'),
          city: yup.string().required('Este campo es requerido'),
          postal_code: yup.string().required('Este campo es requerido'),
          phone: yup.string().required('Este campo es requerido'),

        }).required()
    },
    {
      step: 3,
      validations:
        yup.object({
          event_name: yup.string().required('Este campo es requerido'),
          date_event: yup.string().required('Este campo es requerido'),
          hour_event: yup.number().required('Este campo es requerido'),
          modality_event: yup.string().required('Este campo es requerido'),
          max_guest: yup.string().required('Este campo es requerido'),
          place: yup.number().required('Este campo es requerido'),

        }).required()
    },

  ]


export const RegisterSteps = [
  {
    title: 'Información de Autenticación',
    elements: [
      'email',
      'emailConfirmation',
      'password',
      'password_confirmation'
    ]
  },
  {
    title: 'Datos Personales',
    elements: [
      'document_type',
      'citizen_id',
      'name',
      'first_last_name',
      'second_last_name',
      'occupation',
      'province_id',
      'municipality_id',
      'sector_id',
      'phone',
      'phone2',
      'email2',
      'address'
    ]
  },


  {
    title: 'Activación de cuenta'

  }
];