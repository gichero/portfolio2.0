import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import codeImg2 from '../../assets/backgroundImages/codeImg2.jpg';

const Styles = styled.div`
    .jumbo{
        background: url(${codeImg2}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 300px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .intro{
        font-size: 4em;
        color: yellow;
        font-weight: 400;
    }
    .pararaph{
        font-size: 5em;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="intro">Welcome</h1>
                <p className="paragraph">Code is life</p>
            </Container>
        </Jumbo>
    </Styles>
)
