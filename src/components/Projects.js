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
            <h2>Look at my shit projects here</h2>
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
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={calculator}
                    title="Calculator"
                    desc="A very basic calculator app made for the Odin Project"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={etchasketch}
                    title="Etch-a-Sketch"
                    desc="A little drawin app made for The Odin Project"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;