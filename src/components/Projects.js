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
import barrelroll from "../images/barrelroll.png";
import guide from "../images/guide-start.png";

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
                    imgPath={guide}
                    title="Campus Guide"
                    desc="Product concept for physical interactive guide-board at Tampere University"
                    demolink="https://www.figma.com/proto/Xvw8Bs6r6pnd8D2u02bfmJ/Campus-Guide?page-id=0%3A1&node-id=223-799&p=f&viewport=364%2C269%2C0.07&t=ft0yiprL1LJqhvNu-1&scaling=contain&content-scaling=fixed&starting-point-node-id=223%3A799&show-proto-sidebar=1"
                    gitlink="https://github.com/peralammikko/campus-guide"/>
                </Grid>
                <Grid item xs={12} md={4} className="project-card">
                    <ProjectCard
                    imgPath={barrelroll}
                    title="Bad Game Advice"
                    desc="Dumb game quotes turned into dumb inspirational posts"
                    demolink="https://badgameadvice.vercel.app/"
                    gitlink="https://github.com/peralammikko/badgameadvice"/>
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
                    demolink="https://www.linkedin.com/in/mikko-per%C3%A4l%C3%A4-ba092b19b/overlay/projects/1983787665/multiple-media-viewer/?profileId=ACoAAC7yDugBTXQ-Nk29pB8bWovVIRKzciKVF6c&treasuryMediaId=1709233288306"
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
