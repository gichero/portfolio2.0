import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import styled from 'styled-components';
import grayscaleCrop from '../../assets/backgroundImages/grayscaleCrop.jpg';


const Styles = styled.div`
    .jumbo{
        background: url(${grayscaleCrop}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height:400px;
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
