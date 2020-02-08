import React from 'react';
import styled from 'styled-components';
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { IoIosMail } from "react-icons/io";


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
}
`;

export const Contact = () => (
    <Styles>
        <h2 id="contact">Contact</h2>
        <p id="intro">
        I'd look forward to connect with you! I can be reached via email or any social media outlets. You can also check out my GitHub account to see more of my work, or download my resume to get information about my professional background.
        </p>
        <div id="icons">
        <IoIosMail id="icon"/>
        <IoLogoLinkedin id="icon"/>
        <IoLogoGithub id="icon"/>
        </div>
        
        
    </Styles>
)