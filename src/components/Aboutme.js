import { Container, Grid, CardMedia } from "@mui/material";
import monke from "../images/Navy_Seal.jpg";


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
                    <div className="skillContainer">
                        <div className="skillBox">
                            <img className="skillImg" src={monke} />
                            <p>Name of thing</p>
                        </div>
                        <div className="skillBox">
                            <img className="skillImg" src={monke} />
                            <p>Name of thing</p>
                        </div>
                        <div className="skillBox">
                            <img className="skillImg" src={monke} />
                            <p>Name of thing</p>
                        </div>
                    </div>
                </Grid>
                <Grid item md={5} className="aboutMeImage">
                    <CardMedia
                        component={"img"}
                        src={monke}>    
                    </CardMedia>
                   This is what I look like
                </Grid>
            </Grid>

        </Container>
    )
}

export default Aboutme;