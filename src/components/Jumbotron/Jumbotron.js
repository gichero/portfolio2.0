import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import grayscale from '../../assets/backgroundImages/grayscale.jpg';


const Styles = styled.div`
    .jumbo{
        background: url(${grayscale}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 550px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    #quote{
        color: yellow;
        font-size: 1em;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        margin-top: 400px;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <p id="quote">It is a rough road that leads to the heights of greatness. 'Seneca'</p>
        </Jumbo>
    </Styles>
)
