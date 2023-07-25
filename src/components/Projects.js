import React from "react";
import monke from "../images/Navy_Seal.jpg";
import ProjectCard from "./ProjectCard";
import "../pages/style.css";
import { Grid } from "@mui/material";

function Projects () {
    return (
        <div className="projectbackground">
            <h1>Here are some wack-ass projects</h1>
            <Grid 
                container
                spacing={2}
            >
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
                <Grid item md={4} className="project-card">
                    <ProjectCard
                    imgPath={monke}
                    title="Navy Seal"
                    desc="I am trained in gorilla warfare"/>
                </Grid>
            </Grid>

        </div>
    )
}

export default Projects;