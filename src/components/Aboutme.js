import { Container, Grid, CardMedia } from "@mui/material";
import monke from "../images/Navy_Seal.jpg";
import self from "../images/self.jpg";
import Marquee from "react-fast-marquee";
import { skillList } from "../data/skills.js";
import {findSkillImg} from "../utility/skillImgs.js";


function Aboutme() {

    return (
        <Container maxWidth="lg" className="aboutBackground">
            <Grid 
                container
                className="aboutMeBox"
                boxShadow={4}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item md={5} className="aboutMeText">
                    <h1>Who is this guy anyway?</h1>
                    <p>I'm Mikko, a master's degree student in Tampere University, currently studying Human-Technology Interaction and Software Engineering. 
                        After a bachelor's degree in Material Science, I switched to Computer Science to learn more about UI/UX design related work and developing interesting software.
                        In the summer of 2023, I started a curriculum in The Odin Project and used that knowledge to build this site!</p>
                </Grid>
                <Grid item md={5} className="aboutMeImage">
                    <CardMedia className="selfImage"
                        component={"img"}
                        src={self}>
                    </CardMedia>
                </Grid>
            </Grid>
            <Grid 
                container
                className="aboutSkillContainer"
                boxShadow={4}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <h1>What does this guy know</h1>
                <Marquee pauseOnHover={true}>
                    {skillList.map((skill, id) => (
                        <div className="skillBox" key={id}>
                            <img className="skillImg" src={findSkillImg(skill)} alt={skill} />
                            <p>{skill}</p>
                        </div>
                    ))}
                </Marquee>
            </Grid>

        </Container>
    )
}

export default Aboutme;