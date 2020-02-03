import React from 'react';
import Card, { CardBody, CardTitle } from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export const Projects = () => (

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
        
   
)

