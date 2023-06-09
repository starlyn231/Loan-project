
import { useState } from 'react'
import { ButtonLogin, Container, Error, Form, Input, LinkText, Title, Wrapper } from './styles/LoginStyles'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from 'react-router-dom';
import { loginSchema } from './SchemaLogin';
import TextField from '../../../components/TextField/TextField';
import Avatar from '@mui/material/Avatar';
import { Grid, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import { publicRequest } from '../../services/RequestMethods';
//import { loginFailure, loginStart, loginSuccess } from '../../Redux/UserRedux';
import { useFormik } from "formik";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mssgError, setMssgError] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: loginSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      HadleLogin(values);
    },
  });
  const HadleLogin = async (formData) => {
   
    const authData = {
      email: formData.email,
      password: formData.password,
      
    };
    console.log(authData)
    // e.preventDefault()
    // dispatch(loginStart());
    try {
      //  const res = await publicRequest.post("/auth/login", { username, password });
      //dispatch(loginSuccess(res.data));
      //navigation('/');
    } catch (err) {
      // dispatch(loginFailure());
      // setMssgError(err.response.data)

    }




  }
  console.log(isFetching)
  return (
    <Container>
      <Wrapper>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h2" sx={{
          fontsize: '24px',
          fontWeight: 300,
        }}>
          Inicia sesión
        </Typography>
        <Form
           onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >

          <Grid
            alignItems='flex-start'
            justifyContent='center'
            container
            direction='row'
            x
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Email o usuario'
                type='text'
                id='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.email &&
                  Boolean(formik.errors.email)
                }
                helperText={
                  formik.touched.email &&
                  formik.errors.email
                }
                required
              />        </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                title='Contraseña'
                type='password'
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password &&
                  Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password &&
                  formik.errors.password
                }
                required
              /></Grid>
            <Grid item xs={12} sm={12} md={12}>
              <ButtonLogin variant="contained" type={"submit"} disabled={isFetching}>LOGIN</ButtonLogin>
            </Grid>
          </Grid>

          {error && <Error>{mssgError}.</Error>}
          <LinkText>DO NOT YOU REMEMBER THE PASSWORD?</LinkText>
          <LinkText>CREATE A NEW ACCOUNT</LinkText>
        </Form>
      </Wrapper>
    </Container>
  )
}
