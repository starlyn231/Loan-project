import React from 'react'
import CheckboxLabels from '../../components/Checkbox/Checkbox'
import { Agreeement, ButtonLogin, ButtonRegister, Container, Form, Input, Link, Title, Wrapper } from './style/RegisterStyle'

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREAR CUENTA</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
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
  )
}
