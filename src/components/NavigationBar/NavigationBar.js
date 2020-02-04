import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar {
     background-color: #000000;
     border-radius: 2px;
 }

 .navbar-nav .nav-link{
     color: white;
     font-size: 1.2em;
     font-weight: 300;
     padding: 15px;
     margin-left: 20px;
     margin-right: 20px;

     &:hover {
         color: #e61010;
     }
 }
 .navbar-brand{
    color: white;
    font-family: "Roboto";
    font-size: 2.2em;
    font-weight: 400;
    padding: 5px;
    margin-left: 20px;
   

    &:hover {
        color: #e61010;
    }
 }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" >
            <Navbar.Brand href="/">
                <img
                src="/g-red.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=" "
                />
              ichero 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
