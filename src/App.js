import './App.css';
import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div className="homepagebackground">
      <div className="header">
        <div className="headertext">Header logo</div>
        <ul>
          <li><a className="secondary">Link1</a></li>
          <li><a className="secondary">Link2</a></li>
          <li><a className="secondary">Link3</a></li>
        </ul>
      </div>
      <div className="homepage">
        <Container className="container">
          <Row className="content">
            <Col className="contain-para" md={7}>
              <h2>Hello</h2>
              <h2>I'm Mikko Perälä</h2>
              <a>this site fucking sucks</a>
              <Row className="socialbuttons">
                <button>Button1</button>
                <button>Button2</button>
                <button>Button3</button>
                <button>Button4</button>
              </Row>
            </Col>
            <Col className="contain-image">
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
