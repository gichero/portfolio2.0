import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { GoHome } from "react-icons/go";

const Styles = styled.div`
 .navbar {
     background-color: #000000;
     border-radius: 1px;
 }

 .navbar-nav .nav-link{
     color: white;
     font-size: 1.2em;
     font-weight: 400;
     padding: 15px;
     margin-left: 20px;
     margin-right: 20px;
     text-align: center;

     &:hover, &:active {
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
   
    &:hover, &:active{
        color: #e61010;
    }
 }
 
 .navbar-toggler-icon{
    background-color: white;
    border-radius: 1px
 }
 
`;

export const NavigationBar = () => (
    <Styles  className="sticky-top">
        <Navbar expand="lg" >
            <Navbar.Brand href="/">
                <GoHome/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
