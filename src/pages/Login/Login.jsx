
import { useState } from 'react'
import { ButtonLogin, Container, Error, Form, Input, Link, Title, Wrapper } from './style/LoginStyle'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../Redux/apiCalls';
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const HadleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { username, password });

  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <ButtonLogin onClick={HadleLogin} disabled={isFetching}>LOGIN</ButtonLogin>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}
