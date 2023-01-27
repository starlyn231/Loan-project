import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { useLayoutEffect } from "react";
import TextField from "../../components/TextField/TextField";
import { ViewAuthComponent } from "../../components/viewAuth/ViewAuthComponent";
import { changeImgLayout } from "../../Redux/UiReducerSlices";
import { ButtonGeneral, SmallHeightDivider } from "../../themes/Styles";
import { ButtonContainer } from "../auth/register/styles/RegisterStyles";
import { BodyContent, BodyText, Container, SubTitle, Title } from "./styles/ContactStyles";
import AuthLayoutContact from '../../assets/image/ContactImg.jpg'
import { useDispatch } from "react-redux";
export const Contact = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {

    dispatch(changeImgLayout(AuthLayoutContact))

  }, []);
  return (
    <Container>
      <div style={{ width: "80%", minHeight: "100vh", textAlign: "center" }}>
        <SmallHeightDivider />

        <Title> Contáctenos</Title>
        <BodyText>
          Ayuda a los organizadores de eventos a promover, administrar y
          ejecutar sus eventos a través de un software fácil de usar.
        </BodyText>
        <SmallHeightDivider />
        <Grid
          container
          spacing={{ xs: 1.5, md: 1 }}
          columns={{ xs: 8, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <TextField title='Primer nombre' type='text' id='name' required />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField title='Apellido ' type='text' id='last_name' required />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              title='Correo electrónico  '
              type='email'
              id='email'
              required
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              title='Número de teléfono'
              type='text'
              id='phone'
              required
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              title='Nombre de empresa              '
              type='text'
              id='event_name'
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              title='Comentario/Consulta  '
              type='text'
              id='message'
              multiline
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
        <SmallHeightDivider />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
          <ButtonContainer>
            <ButtonGeneral backgroundColor='black' color='white'>
              Iniciar Sesion
            </ButtonGeneral>
          </ButtonContainer>
        </div>


        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          marginTop: '10px',
        }}>
          <SubTitle> Apoyo</SubTitle>
          <BodyContent>
            Si ya es usuario de Tveo  y tiene dificultades o tiene preguntas, envíe un ticket llenando el formulario de información a la derecha.
          </BodyContent>

          <SubTitle> Contacto</SubTitle>
          <BodyContent>
            Si ya es usuario de Tveo  y tiene dificultades o tiene preguntas, envíe un ticket llenando el formulario de información a la derecha.
          </BodyContent>


        </div>

        <SmallHeightDivider />
      </div>
    </Container>
  );
};
