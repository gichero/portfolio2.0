import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import grayscale from '../../assets/backgroundImages/grayscale.jpg';


const Styles = styled.div`
    .jumbo{
        background: url(${grayscale}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        width:100
        height:1200px;
        position: relative;
        z-index: -3;
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
        font-size: 0.9em;
        font-weight: 500;
        font-style: italic;
        padding: 25px;
        margin-top: 250px;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <p id="quote">Difficulties strengthen the mind, as labor does the body. 'Seneca'</p>
        </Jumbo>
    </Styles>
)
