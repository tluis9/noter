import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Redirect } from "react-router-dom";
import UsersService from '../../../services/users';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const user = await UsersService.login({email: email,password: password});
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  }
  
  if(RedirectToRegister == true)
    return <Redirect to={{pathname: "/register"}}/>
  else if(RedirectToNotes == true)
    return <Redirect to={{pathname: "/notes"}}/>

  return (
    <Fragment>
        <Column.Group centered>
        <form onSubmit={HandleSubmit}>
            <Column size={12}>
              <Field>
                <Label size="small">E-mail:</Label>
                <Control>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    name="email"
                  />
                </Control>
              </Field>
              <Field>
                <Label size="small">Senha:</Label>
                <Control>
                  <Input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    name="password"
                  />
                </Control>
              </Field>
              <Field>
                <Control>
                  <Column.Group>
                    <Column>
                      <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Registrar-se</a>
                    </Column>
                    <Column>
                      <Button color="custom-purple" outlined>Login</Button>
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

export default LoginForm;