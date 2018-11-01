import * as React from 'react';
import { Register } from '../components/Register';
import { Login } from '../components/Login';
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const RegisterPage = () => (
  <Columns>
    <Register />
    <Login />
  </Columns>
);

export default RegisterPage;
