import React from "react";
import monke from "../images/Navy_Seal.jpg";
import ProjectCard from "./ProjectCard";
import "../pages/style.css";
import { Box, Container, Grid } from "@mui/material";

function Projects () {
    return (
        <Container madWidth="xl">
            <h2>Projects here</h2>
            <Grid
                container
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
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item xs={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;