import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Sandbox () {
    return (
    <div className='sandboxbackground'>
        <Container>
            <Row>
                <Col md={7}>
                    <p>nothing but sand here!</p>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Sandbox;