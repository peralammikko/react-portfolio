import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../App.css';

function Home () {
    return (
    <div className="homepage">
        <Container className="container">
        <Row className="content">
            <Col className="contain-para" md={7}>
            <h2 className="titletext">Hello</h2>
            <h2 className="nametext">I'm Mikko Perälä</h2>
            <a>this site fucking sucks</a>
            <Row className="socialbuttons">
                <button className="socialmediabutton">Button1</button>
                <button className="socialmediabutton">Button2</button>
                <button className="socialmediabutton">Button3</button>
                <button className="socialmediabutton">Button4</button>
            </Row>
            </Col>
            <Col className="contain-image">
            </Col>
        </Row>
        </Container>
    </div>)
}

export default Home;