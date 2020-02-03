import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar {
     background-color: #99CCFF;
     border-radius: 5;
 }

 .navbar-brand, .navbar-nav .nav-link{
     color: black;
     font-size: 1.2em;
     font-weight: 300;
     padding: 15px;
     margin-left: 30px;
     margin-right: 30px;

     &:hover {
         color: white;
     }
 }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Amos Gichero</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
