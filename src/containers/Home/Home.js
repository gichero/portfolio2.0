import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    #name{
        text-align: left;
    }
    #intro{
        text-align: left;
        line-height: 2;  
    }
`;

export const Home = () => (

    <Styles>
        <h2 id="name">Hi, I'm Amos Gichero</h2>
        <p id="intro">
        I'm a Full Stack Web Developer living in Atlanta, GA. 
        I'm originally from New Orleans and attended the University of Georgia
        for my undergraduate degree where I majored in Psychology. 
        Upon graduation I moved to Washington, DC and began working on Capitol Hill for David Vitter, a US Senator from Louisiana. 
        After many years in the political realm I decided I was ready for a new challenge. 
        I've always loved science and technology so web development was a perfect fit for my next endeavor.
        I spent a year teaching myself coding through online tutorials (and a lot of trial and error!)
        and building websites and games for myself and friends. I realized I loved programming and wanted to pursue web development as a career. 
        I graduated from DigitalCrafts' four month, full-time immersive coding bootcamp in June of 2017.
        </p>
        <img/>
        <img/>  
    </Styles>
    
)