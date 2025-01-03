import React from "react";
import '../pages/style.css';
import { CardMedia, Container, Grid, IconButton } from "@mui/material";
import monke from "../images/Navy_Seal.jpg";
import gondola from "../images/gondola.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MovieIcon from '@mui/icons-material/Movie';
import Tooltip from '@mui/material/Tooltip';


function Home () {
    return (
        <Container className="homepageContainer" xs={12}>
            <Grid
                container 
                className="homepageContent"
            >
                <Grid item className="homePara" md={5}>
                <h2 className="titletext">Hello visitor</h2>
                <h2 className="nametext">I'm Mikko Perälä</h2>
                <a className="welcometext">And this is my first portfolio site</a>
                <h5 className="smalltext">
                    In the summer of 2023, I knew next to nothing about web dev. So, I started a curriculum in The Odin Project and used that knowledge to build this site!
                </h5>
                <h5 className="smalltext">
                    It's far from perfect, but it's a start that taught me a lot of things. Site rework coming soon!
                </h5>
                <div className="socialbuttons">
                    <Tooltip title="GitHub" placement="bottom-end">
                        <IconButton 
                            className="socialmediabutton" 
                            aria-label='github'
                            onClick={()=>window.open("https://github.com/peralammikko")}><GitHubIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement="bottom-end">
                        <IconButton 
                            className="socialmediabutton" 
                            aria-label='linkedin'
                            onClick={()=>window.open("https://www.linkedin.com/in/mikko-per%C3%A4l%C3%A4-ba092b19b/")}>
                            <LinkedInIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Instagram" placement="bottom-end">
                        <IconButton 
                            className="socialmediabutton" 
                            aria-label='instagram'
                            onClick={() => window.open("https://www.instagram.com/mikkoper/")}>
                            <InstagramIcon/>
                        </IconButton>
                    </Tooltip>           
                    <Tooltip title="Letterboxd" placement="bottom-end">          
                        <IconButton 
                            className="socialmediabutton" 
                            aria-label='letterboxd'
                            onClick={()=>window.open("https://letterboxd.com/mixonlol/")}>
                            <MovieIcon/>
                        </IconButton>
                    </Tooltip>
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
    )
}

export default Home;
