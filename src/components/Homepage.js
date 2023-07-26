import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import '../pages/style.css';
import { CardMedia, Container, Grid } from "@mui/material";
import { Row } from "react-bootstrap";
import monke from "../images/Navy_Seal.jpg";

function Home () {
    return (
    <Container className="homepageContainer">
        <Grid
            container 
            className="homepageContent"
        >
            <Grid item className="homePara" md={5}>
            <h2 className="titletext">Hello</h2>
            <h2 className="nametext">I'm Mikko Perälä</h2>
            <a>this site fucking sucks</a>
                <Row className="socialbuttons">
                    <button className="socialmediabutton">Instagram</button>
                    <button className="socialmediabutton">Twitter</button>
                    <button className="socialmediabutton">YouTube</button>
                    <button className="socialmediabutton">Github</button>
                </Row>
            </Grid>
            <Grid item md={5}>
                <CardMedia 
                    component={"img"}
                    src={monke}>
                    </CardMedia>
            </Grid>
        </Grid>
    </Container>
    )
}

export default Home;