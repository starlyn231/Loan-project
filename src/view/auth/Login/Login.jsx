import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CheckBox from "../../../CheckBox/CheckBox";
import TextField from "../../../components/TextField/TextField";
import {
  ButtonGeneral,
  MediumHeightDivider,
  SmallHeightDivider,
} from "../../../themes/Styles";
import {
  BodyText,
  ButtonAuth,
  ButtonAuthContainer,
  ButtonContainer,
  Container,
  LinkText,
  TextFieldContainer,
  Title,
} from "./styles/LoginStyles";

import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ViewAuthComponent } from "../../../components/viewAuth/ViewAuthComponent";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import AuthLayoutLogin from '../../../assets/image/noah-rosenfield1.png'
import { changeImgLayout } from "../../../Redux/UiReducerSlices";

export const Login = () => {
  const example = () => {
    console.log("hola");
  };
  const dispatch = useDispatch();
  const navigation = useNavigate();


  useLayoutEffect(() => {

    // changed img of layout auth
    dispatch(changeImgLayout(AuthLayoutLogin))

  }, []);
  return (
    <ViewAuthComponent
      condicionRenderIcon={true}
      title={"Iniciar sesión"}
      bodyText='Ahora solo tienes que introducir tu nombre de usuario y contraseña y a
      disfrutar de todo lo que Tveo te ofrece.'
      messageRegister={"¿Aún no tienes una cuenta? Registrarme"}
      message='No recuerdo mi contraseña'
      btnTitle='Iniciar Sesion'
      onClickPress={() => example()}
      reDirect={'/login'}
    >
      <TextFieldContainer>
        <TextField
          title='Nombre de usuario o Email'
          type='text'
          id='user'
          required
        />
      </TextFieldContainer>

      <TextFieldContainer>
        <TextField title='Contraseña' type='password' id='password' required />
      </TextFieldContainer>

      <TextFieldContainer style={{}}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="No soy robot" />

        </FormGroup>
      </TextFieldContainer>

      <ButtonContainer style={{}}>
        <ButtonGeneral backgroundColor='black' color='white'>Iniciar Sesion</ButtonGeneral>
      </ButtonContainer>
      <SmallHeightDivider />

      <LinkText to='/requestPassword'>No recuerdo mi contraseña</LinkText>
      <SmallHeightDivider />
      <Grid justifyContent="center" container direction="row" spacing={{ xs: 1, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={3} md={4}>
          <ButtonAuth variant="outlined" startIcon={<GoogleIcon />}>
            GOOGLE
          </ButtonAuth>
        </Grid>

        <Grid item xs={12} sm={3} md={4}>
          <ButtonAuth variant="outlined" startIcon={<FacebookRoundedIcon sx={{ color: 'blue' }} />}>
            FACEBOOK
          </ButtonAuth>
        </Grid>

        <Grid item xs={12} sm={3} md={4}>
          <ButtonAuth backgroundColor="black" sx={{ color: 'white' }} startIcon={<AppleIcon />}>
            APPLE
          </ButtonAuth>
        </Grid>
      </Grid>
      <SmallHeightDivider />

      <LinkText to='/register'>¿Aún no tienes una cuenta? Registrarme</LinkText>


    </ViewAuthComponent>
  );
};
