import { Grid } from "@mui/material";
import React from "react";
import CheckboxLabels from "../../components/Checkbox/Checkbox";
import {
  Agreeement,
  ButtonLogin,
  ButtonRegister,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper,
} from "./style/RegisterStyle";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR CUENTA</Title>
        <Form>
          <Grid container={true}>
            <Grid xs={12} sm={6} md={6} xl={6} >
              <Input placeholder='name' />
            </Grid>

            <Grid xs={12} sm={6} md={6} xl={6}>
              <Input placeholder='last name' />
            </Grid>
            <Grid xs={12} sm={6} md={6} xl={6}>
              <Input placeholder='username' />

            </Grid>

            <Grid xs={12} sm={6} md={6} xl={6}>
              <Input placeholder='email' />
            </Grid>
            <Grid xs={12} sm={6} md={6} xl={6}>
              <Input placeholder='password' />
            </Grid>

            <Grid xs={12} sm={6} md={6} xl={6}>
              <Input placeholder='confirm password' />
            </Grid>
          </Grid>
          <Agreeement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreeement>
          {/* <div className="
<div style={{ display: 'flex', }}>
            <CheckboxLabels />
          </div>

"></div>*/}

          <ButtonRegister>CREATE</ButtonRegister>

        </Form>
      </Wrapper>
    </Container>
  );
};
