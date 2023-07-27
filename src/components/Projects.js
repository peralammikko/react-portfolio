import React from "react";
import monke from "../images/Navy_Seal.jpg";
import ProjectCard from "./ProjectCard";
import "../pages/style.css";
import { Box, Container, Grid } from "@mui/material";
import calculator from "../images/calculator.png";
import etchasketch from "../images/etchasketch.png";

function Projects () {
    return (
        <Container madWidth="xl">
            <h2>Projects I've worked on</h2>
            <Grid
                container
                className="projectContainer"
                justifyContent="center"
                alignItems="center"
                direction="row"
            >
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"
                    gitlink="https://www.google.com"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={calculator}
                    title="Calculator"
                    desc="A very basic calculator app made for the Odin Project"
                    gitlink="https://github.com/peralammikko/git_test"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={etchasketch}
                    title="Etch-a-Sketch"
                    desc="A little drawin app made for The Odin Project"
                    gitlink="https://github.com/peralammikko/etchasketch"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;