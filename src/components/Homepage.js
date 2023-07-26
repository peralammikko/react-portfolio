import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import '../pages/style.css';
import { CardMedia, Container, Grid, IconButton } from "@mui/material";
import { Row } from "react-bootstrap";
import monke from "../images/Navy_Seal.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


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
                <div className="socialbuttons">
                    <IconButton className="socialmediabutton" aria-label='linkedin'><LinkedInIcon/></IconButton>
                    <IconButton className="socialmediabutton" aria-label='linkedin'><TwitterIcon/></IconButton>
                    <IconButton className="socialmediabutton" aria-label='linkedin'><GitHubIcon/></IconButton>
                </div>
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