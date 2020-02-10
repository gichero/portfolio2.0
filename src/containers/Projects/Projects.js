import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';

const Styles = styled.div`
#projects{
    text-align: center;
}
#projects-intro{
    text-align: center;
    line-height: 1.5;
    font-size: 1.2em;
    margin: 20px auto 30px auto;
}
`

export const Projects = () => (
    <Styles>
    <h2 id="projects">Projects</h2>
    <p id="projects-intro">I love feedback! If you have any comments or questions about any of my projects please get in touch.
    My contact information can be found in the contact page.
    </p> 
     
    <CardColumns>
        <Card>
            <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>Nyakio's Cakes</Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>Kevin's Pudding</Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>Total care</Card.Text>
            </Card.Body>
        </Card>
    </CardColumns>
    </Styles>    
   
)

