import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../pages/style.css';
import { CardMedia, Container, Grid, IconButton } from "@mui/material";
import monke from "../images/Navy_Seal.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function Home () {
    return (
    <Container className="homepageContainer">
        <Grid
            container 
            className="homepageContent"
        >
            <Grid item className="homePara" md={5}>
            <h2 className="titletext">Hello there</h2>
            <h2 className="nametext">I'm Mikko Perälä</h2>
            <a>This is my portfolio site</a>
                <div className="socialbuttons">
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='github'
                        onClick={()=>window.open("https://github.com/peralammikko")}><GitHubIcon/></IconButton>
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='instagram'
                        onClick={() => window.open("https://www.instagram.com/mikkoper/")}
                    ><InstagramIcon/></IconButton>
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='linkedin'
                        onClick={()=>window.open("https://www.linkedin.com/in/mikko-per%C3%A4l%C3%A4-ba092b19b/")}
                    ><LinkedInIcon/></IconButton>
                </div>
            </Grid>
            <Grid item md={5} className="homeImage">
                <CardMedia 
                    className="devImage"
                    component={"img"}
                    src={monke}>
                    </CardMedia>
            </Grid>
        </Grid>
    </Container>
    )
}

export default Home;