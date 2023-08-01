import React from "react";
import '../pages/style.css';
import { CardMedia, Container, Grid, IconButton } from "@mui/material";
import monke from "../images/Navy_Seal.jpg";
import gondola from "../images/gondola.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MovieIcon from '@mui/icons-material/Movie';


function Home () {
    return (
    <div className="homeBackground">
        <Container className="homepageContainer">
            <Grid
                container 
                className="homepageContent"
                xs={8}
                md={12}
            >
                <Grid item className="homePara" md={5}>
                <h2 className="titletext">Hello there</h2>
                <h2 className="nametext">I'm Mikko Perälä</h2>
                <a>This is my portfolio site</a>
                <div className="socialbuttons">
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='github'
                        onClick={()=>window.open("https://github.com/peralammikko")}><GitHubIcon/>
                        </IconButton>
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='linkedin'
                        onClick={()=>window.open("https://www.linkedin.com/in/mikko-per%C3%A4l%C3%A4-ba092b19b/")}>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='instagram'
                        onClick={() => window.open("https://www.instagram.com/mikkoper/")}>
                        <InstagramIcon/>
                    </IconButton>
                    <IconButton 
                        className="socialmediabutton" 
                        aria-label='letterboxd'
                        onClick={()=>window.open("https://letterboxd.com/mixonlol/")}>
                        <MovieIcon/>
                    </IconButton>
                </div>
                </Grid>
                <Grid item md={5} className="homeImage">
                    <CardMedia 
                        className="devImage"
                        component={"img"}
                        src={gondola}>
                        </CardMedia>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default Home;