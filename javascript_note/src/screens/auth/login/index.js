import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card} from "rbx";
import LogoImage from '../../../assets/images/logo_1.png';
import "../../../styles/auth.scss";
import LoginForm from "../../../components/auth/login_form";
import { Link } from 'react-router-dom';


const LoginScreen = () => (
  <Fragment>
    <Section className="auth">
      <Container>
        <Column.Group centered>
          <Column size="two-fifths">
            <Card>
              <Card.Content>
              <Section>
                <Column.Group centered>
                  <Column size={12}>
                    <Link to='/'>
                        <img src={LogoImage} className="logo_auth"/>
                    </Link>
                  </Column>
                </Column.Group>

                <Column.Group>
                  <Column size={12}>
                    <Title size={6} className="has-text-grey has-text-centered">
                      Suas Notas na Nuvem... de graça!
                    </Title>
                  </Column>
                </Column.Group>
              </Section>
              <LoginForm/>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
);

export default LoginScreen;