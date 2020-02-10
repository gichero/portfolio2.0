import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';

const Styles = styled.div`
#projects{
    text-align: center;
}
`

export const Projects = () => (
    <Styles>
    <h2 id="projects">Projects</h2>
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

