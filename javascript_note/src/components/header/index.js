import React, {useState} from 'react';
import { Navbar, Container, Column } from 'rbx';
import LogoImage from '../../assets/images/logo_1.png';
import "../../styles/header.scss";
import { Link } from 'react-router-dom';

function Header(){

  return(
    <Container>
            <Navbar>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={LogoImage} />
                    </Link>
                <Navbar.Burger />
                </Navbar.Brand>
                

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                        <Column>
                            <Link to="/register" className="button is-white has-text-custom-green register-button">Register</Link>
                        </Column>
                        <Column>
                            <Link to="/login" className="button is-outlined is-custom-green login-button">Login</Link>
                        </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </Container>
  )
}

export default Header;