import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import '../pages/style.css';

const colors = ['yellow', 'black', 'aquamarine', 'orangered', '#1f2937'];

function Sandbox () {
    const [color, setColor] = useState('#1f2937');
    const [buttonCounter, setButtonCounter] = useState(0);

    function handleButtonClick() {
        setButtonCounter(buttonCounter+1);
    };

    function handleCounterReset() {
        setButtonCounter(0);
    }

    function handleBG() {
        setColor(colors[Math.floor(Math.random()*colors.length)]);
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    })



    return (
    <div className='sandboxBackground'>
        <Container>
            <h1>Play area for all things React!</h1>
            <Row>
                <Col>
                    <button onClick={handleBG}>Change background color</button>
                </Col>
                <Col md={7} className="counterbuttons">
                    <button onClick={handleButtonClick}>{buttonCounter}</button>
                    <button onClick={handleCounterReset}>Reset counter</button>
                </Col>
                <Col>
                    <h2>More stuff coming!</h2>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Sandbox;