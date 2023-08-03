import React from "react";
import monke from "../images/Navy_Seal.jpg";
import ProjectCard from "./ProjectCard";
import "../pages/style.css";
import { Container, Grid } from "@mui/material";
import calculator from "../images/calculator.png";
import etchasketch from "../images/etchasketch.png";
import landingpage from "../images/landingpage.png";
import portfolio from "../images/portfolio.png";
import fridgetinder from "../images/fridgetinder.png";

function Projects () {
    return (
        <Container maxWidth="xl">
            <h2 className="projectsTitle">Stuff I've done</h2>
            <Grid
                container
                className="projectContainer"
                justifyContent="center"
                alignItems="center"
                direction="row"
            >
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={landingpage}
                    title="Landing page"
                    desc="First demonstration of a landing page made for The Odin Project"
                    demolink="https://odin-landing-page-seven.vercel.app/"
                    gitlink="https://github.com/peralammikko/odin-landing-page"/>
                </Grid>
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={calculator}
                    title="Calculator"
                    desc="A very basic calculator app made for The Odin Project."
                    demolink="https://odin-calculator-gray.vercel.app/"
                    gitlink="https://github.com/peralammikko/git_test"/>
                </Grid>
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={etchasketch}
                    title="Etch-a-Sketch"
                    desc="A little drawing app made for The Odin Project."
                    demolink="https://etchasketch-bay.vercel.app/"
                    gitlink="https://github.com/peralammikko/etchasketch"/>
                </Grid>
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={fridgetinder}
                    title="FridgeTinder"
                    desc="Course project for Human-Technology Interaction 2: Design. Hi-Fi mobile wireframes of a food-saving application"
                    gitlink="https://github.com/peralammikko/FridgeTinder"/>
                </Grid>
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={portfolio}
                    title="This site"
                    desc="Pretty meta huh?"
                    demolink="/"
                    gitlink="https://github.com/peralammikko/react-portfolio"/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects;