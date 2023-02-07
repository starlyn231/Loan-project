import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
  stepLabelClasses,
} from "@mui/material";

import { useEffect, useLayoutEffect, useStatViewAuthComponente } from "react";
import { ViewAuthComponent } from "../../../components/viewAuth/ViewAuthComponent";
import {
  BodyText,
  ButtonContainer,
  Container,
  LinkText,
  TextFieldContainer,
  Title,
} from "./styles/RegisterStyles";
import TextField from "../../../components/TextField/TextField";
import {
  ButtonGeneral,
  SmallHeightDivider,
  StyledButtonOutlined,
} from "../../../themes/Styles";
import { useFormik } from "formik";
import { FormSchema, RegisterSteps } from "./RegisterMock";
import MobileStepper from "@mui/material/MobileStepper";
import Stepper from "@mui/material/Stepper";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthLayoutregister from "../../../assets/image/AuthRegisterImg.jpg";
import { changeImgLayout } from "../../../Redux/UiReducerSlices";
import { styled } from '@mui/system';
import { makeStyles } from "@mui/styles";
export const Register = () => {

  const useStyles = makeStyles(() => ({
    root: {
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active": {
        color: 'black',
        fontSize: "30px",
      },
      "& .MuiStepIcon-completed": { color: "green", },
      "& .Mui-disabled .MuiStepIcon-root": {
        color: 'gray',
        fontSize: "30px",
      },
    },
  }))
  const c = useStyles();
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const matchesWidth = useMediaQuery("(min-width:768px)");
  const [schemaValidation, setSchemaValidation] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  //const stepsLenght = RegisterSteps.length;
  const stepsTitles = RegisterSteps.map((step) => step.title);
  // IN THIS CASE IT IS -2 BECAUSE The last step is only a Message it does not contain a form
  //const lastStep = stepsLenght - 1 == activeStep;
  //const [userRegistered, setUserRegistered] = useState(false);
  const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad"
  ];
  const formik = useFormik({
    initialValues: {
      test: "",
      name: "",
      email: "",
      password: "",
      companyName: "",
      address: "",
      suite: "",
      province: "",
      country: "",
      province: "",
      city: "",
      postal_code: "",
      phone: "",
      event_name: "",
      date_event: "",
      hour_event: "",
      modality_event: "",
      max_guest: "",
      place: "",
    },
    validationSchema: schemaValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      if (activeStep === 2) {
        handleRegister(values);
      } else {
        handleNext();
      }

      // validateStepForm({ values, actions });
    },
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const innerSchema = FormSchema[activeStep];
    if (typeof innerSchema === "object") {
      setSchemaValidation(innerSchema.validations);
    }
    return () => { };
  }, [activeStep]);

  const handleRegister = async (formData) => {
    console.log(formData);
    // setUserRegistered(true);
    //  handleNext();
  };

  useLayoutEffect(() => {
    // changed img of layout auth
    dispatch(changeImgLayout(AuthLayoutregister));
  }, []);

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
          minHeight: "100vh",
        }}
      >
        <SmallHeightDivider />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >

          <Stepper

            //nonLinear
            spacing={{ xs: 2, md: 2 }}
            sx={{
              minWidth: 300,
              overflow: "hidden",

            }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step
                className={c.root}
                key={label}>
                <StepLabel style={{ color: 'red' }} >{label} </StepLabel>
              </Step>
            ))}
          </Stepper>


          <div
            style={{
              display: "flex",

              justifyContent: "flex-end",
            }}
          >
            {activeStep == 0 ? (
              <CancelIcon onClick={() => navigation("/")} sx={{}} />
            ) : (
              <KeyboardReturnIcon onClick={handleBack} />
            )}
          </div>
        </div>

        <Title>
          {activeStep == 0
            ? "Ingresa la información de tu Evento"
            : "Crear cuenta"}{" "}
        </Title>
        <BodyText>
          {activeStep == 1
            ? "Introduce tu la información solicitada para que puedas disfrutar de todo lo que Tveo ofrece."
            : "No se preocupe, sabemos que es posible que los detalles de su evento aún no estén finalizados. Es por eso que podrá ajustar esta información en Configuración del eventos en su panel de  Tveo."}
        </BodyText>
        <SmallHeightDivider />

        {activeStep == 0 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 8, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Nombre y Apellido'
                type='text'
                id='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Email'
                type='email'
                id='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Contraseña'
                type='password'
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                required
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label='No soy robot'
                />
              </FormGroup>
            </Grid>
          </Grid>
        ) : activeStep == 1 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 8, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Nombre de empresa'
                type='text'
                id='companyName'
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
                required
              />
            </Grid>
            <Grid item xs={8} sm={7} md={8}>
              <TextField
                title='Dirección'
                type='text'
                id='address'
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                required
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <TextField
                title='No. casa'
                type='text'
                id='suite'
                value={formik.values.suite}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.suite && Boolean(formik.errors.suite)}
                helperText={formik.touched.suite && formik.errors.suite}
                required
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='País'
                type='text'
                id='country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Provincia'
                type='text'
                id='province'
                value={formik.values.province}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.province && Boolean(formik.errors.province)
                }
                helperText={formik.touched.province && formik.errors.province}
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Ciudad'
                type='text'
                id='city'
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Codigo Postal'
                type='text'
                id='postal_code'
                value={formik.values.postal_code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.postal_code &&
                  Boolean(formik.errors.postal_code)
                }
                helperText={
                  formik.touched.postal_code && formik.errors.postal_code
                }
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Telefono'
                type='text'
                id='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                required
              />
            </Grid>
          </Grid>
        ) : activeStep == 2 ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 8, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Nombre del evento'
                type='text'
                id='event_name'
                value={formik.values.event_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.event_name && Boolean(formik.errors.event_name)
                }
                helperText={
                  formik.touched.event_name && formik.errors.event_name
                }
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Fecha del evento'
                type='text'
                id='date_event'
                value={formik.values.date_event}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.date_event && Boolean(formik.errors.date_event)
                }
                helperText={
                  formik.touched.date_event && formik.errors.date_event
                }
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Hora'
                type='text'
                id='hour_event'
                value={formik.values.hour_event}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.hour_event && Boolean(formik.errors.hour_event)
                }
                helperText={
                  formik.touched.hour_event && formik.errors.hour_event
                }
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Modalidad'
                type='text'
                id='modality_event'
                value={formik.values.modality_event}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.modality_event &&
                  Boolean(formik.errors.modality_event)
                }
                helperText={
                  formik.touched.modality_event && formik.errors.modality_event
                }
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Maximo'
                type='text'
                id='max_guest'
                value={formik.values.max_guest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.max_guest && Boolean(formik.errors.max_guest)
                }
                helperText={formik.touched.max_guest && formik.errors.max_guest}
                required
              />
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <TextField
                title='Lugar del evento'
                type='text'
                id='place'
                value={formik.values.place}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.place && Boolean(formik.errors.place)}
                helperText={formik.touched.place && formik.errors.place}
                required
              />
            </Grid>
          </Grid>
        ) : (
          <div> ¡Gracias! Recibirás un correo de verificación.</div>
        )}
        <ButtonContainer style={{}}>
          <ButtonGeneral
            sx={{ color: "white" }}
            backgroundColor='black'
            color='white '
            onClick={() => formik.handleSubmit()}
          >

            {activeStep === 2 ? "Registrar" : "Continuar"}
          </ButtonGeneral>
        </ButtonContainer>

        <SmallHeightDivider />
        <LinkText to='/login'>¿Aún tienes cuenta? Log In</LinkText>
        <SmallHeightDivider />
      </div>
    </Container>
  );
};
