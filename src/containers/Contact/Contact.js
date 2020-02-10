import React from 'react';
import styled from 'styled-components';
import { FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";



const Styles = styled.div`
#contact{
    text-align: center;
}
#intro{
    text-align: center;
    line-height: 2;  
}
#contact-icons{
    text-align: center;
    font-size: 3em;
}
#icon{
    margin: 15px;
    color: black;

    &:hover {
        color: #e61010;
    }
}
`;

export const Contact = () => (
    <Styles>
        <h2 id="contact">Contact</h2>
        <p id="intro">
        I'd look forward to connect with you! I can be reached via email or any social media outlets. 
        You can also check out my GitHub account to see more of my work, or download my resume to get information about my professional background.
        </p>
        <div id="contact-icons">
            <a href="mailto:amosgichero@gmail.com">
            <FiMail id="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/amos-gichero-579913a4/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin id="icon"/>
            </a>
            <a href="https://github.com/gichero" target="_blank" rel="noopener noreferrer">
            <FiGithub id="icon"/>
            </a>  
        </div>
        
        
    </Styles>
)