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
#icons{
    text-align: center;
    font-size: 3em;
}
#icon{
    margin: 15px;

    &:hover {
        color: #e61010;
    }
}
`;

export const Contact = () => (
    <Styles>
        <h2 id="contact">Contact</h2>
        <p id="intro">
        I'd look forward to connect with you! I can be reached via email or any social media outlets. You can also check out my GitHub account to see more of my work, or download my resume to get information about my professional background.
        </p>
        <div id="icons">
        <FiMail id="icon"/>
        <FiLinkedin id="icon"/>
        <FiGithub id="icon"/>
        </div>
        
        
    </Styles>
)