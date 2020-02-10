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
    #myImage{
        float: left;
        padding:10px;
    }
`;

export const Home = () => (

    <Styles>
        <h3 id="name">Hi, I'm Amos Gichero</h3>
        <p id="intro">
        I'm a Full Stack Web Developer living in Jacksonville, FL. 
        I'm originally from Atlanta by way of Australia. I attended the University of Canberra
        for my undergraduate degree where I majored in Information Systems and Business. 
        I moved to the United States in 2009 and worked as a truck driver before I decided I was ready for a new challenge. 
        I've always loved science and technology so web development was a perfect fit for my next endeavor.
        I enrolled and completed a computer science program at Chattahoochee technical college all along while
        teaching myself coding through online tutorials (and a lot of trial and error!)
        and building websites and games for myself and friends. I realized I loved programming and wanted to pursue web development as a career. 
        I graduated from DigitalCrafts' a four month, full-time immersive coding bootcamp in June of 2017.
        </p>
        <img/>
        <img/>  
    </Styles>
    
)