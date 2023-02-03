import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { RegisterSteps } from "./TestContanst";
import { Formik, Form, Field } from 'formik';
import { Box, Button, TextField } from "@mui/material";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const formSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string().required('Last name is required'),

  });
  /*
    const FormSchema =
      [
        {
          step: 1,
          validation:
            Yup.object({
              email: Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Required"),
            })
        },
        {
          step: 2,
          validation:
            Yup.object({
              name: Yup.string().required("Required"),
              address: Yup.string().required("Required")
            })
        },
        {
          step: 3,
          validation:
            Yup.object({
              country: Yup.string().required("Required"),
              lastname: Yup.string().required("Required"),
            })
        }
  
      ]
  *//*
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
        address: "",
      },
      validationSchema: schemaValidation,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (values, actions) => {
        validateStepForm({ values, actions });
      },
    });
   */
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ isValid }) => (
        <Form>
          {step === 1 && (
            <>
              <Field
                name="firstName"
                as={TextField}
                label="First Name"
                fullWidth
                margin="normal"
              />
              <Field
                name="lastName"
                as={TextField}
                label="Last Name"
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"

                  onClick={nextStep}
                >
                  Next
                </Button>
              </Box>
            </>
          )}
          {step === 2 && (
            <>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="secondary" onClick={prevStep}>
                  Prev
                </Button>
                <Button
                  variant="contained"
                  color="primary"

                  onClick={nextStep}
                >
                  Next
                </Button>
              </Box>
            </>
          )}

          {step === 3 && (

            <>
              <Field
                name="address"
                as={TextField}
                label="address"
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="secondary" onClick={prevStep}>
                  Prev
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
