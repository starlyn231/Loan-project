
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TextField from '../../../components/TextField/TextField';
import { loginSchema } from './SchemaLogin';
import { ButtonLogin, Container, Error, Form, LinkText, Wrapper } from './styles/LoginStyles';
//import { publicRequest } from '../../services/RequestMethods';
//import { loginFailure, loginStart, loginSuccess } from '../../Redux/UserRedux';
import { useFormik } from "formik";
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { loginService } from '../../../callApi/Login';
import { setTokenToLocalStorage } from '../../../requestManager/AxiosHandler';
import { loginFailure, loginStart, loginSuccess } from '../../../Redux/UserRedux';
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

  const mutation = useMutation(loginService);

  const HadleLogin = async (formData) => {
    dispatch(loginStart());
    const authData = { email: formData.email, password: formData.password, };

    mutation.mutate(authData, {
      onSuccess: (response) => {
        setTokenToLocalStorage(response?.token);

        if (response?.success) {
          dispatch(loginSuccess(response));
          navigation('/home');
        }
      },
      onError: (error) => {
        dispatch(loginFailure());
        setMssgError(error.response.data.msg)
        toast.error(error.response.data.msg);
      },
    });

  }

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
              />
              <Error>{mssgError}</Error>
            </Grid>
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
