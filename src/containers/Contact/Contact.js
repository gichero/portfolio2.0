import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
#contact{
    text-align: center;
}
#intro{
    text-align: center;
    line-height: 2;  
}
`;

export const Contact = () => (
    <Styles>
        <h2 id="contact">Contact</h2>
        <p id="intro">
        I'd look forward to connect with you! I can be reached via email or any social media outlets. You can also check out my GitHub account to see more of my work, or download my resume to get information about my professional background.
        </p>
    </Styles>
)