import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Redirect } from "react-router-dom";
import UsersService from '../../../services/users';

function RegisterForm() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [redirectToLogin, setRedirectToLogin] = useState(false);
const [error, setError] = useState(false);

const HandleSubmit = async (evt) => {
  evt.preventDefault();

  try {
    const user = await UsersService.register({name: name,email: email,password: password});
    setRedirectToLogin(true);
  } catch (error) {
    setError(true)
  }
}

if(redirectToLogin)
return <Redirect to={{pathname: "/login"}}/>
  
    return (
    <Fragment>
        <Column.Group centered>
          <form onSubmit={HandleSubmit}>
            <Column size={12}>
              <Field>
                <Label size="small">Nome:</Label>
                <Control>
                  <Input 
                    type="name"
                    required
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Label size="small">E-mail:</Label>
                <Control>
                  <Input 
                    type="email" 
                    required
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Label size="small">Senha:</Label>
                <Control>
                  <Input 
                    type="password" 
                    required
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Column.Group breakpoint="mobile">
                    <Column>
                    <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Fazer Login</a>
                    </Column>
                    <Column>
                      <Button color="custom-purple" outlined>Registrar</Button>
                    </Column>
                  </Column.Group>
                </Control>
              </Field>
              { error && <Help color="danger">E-mail ou Senha inválida!</Help> }
            </Column>
          </form>
        </Column.Group>
    </Fragment>
  )
}

export default RegisterForm;