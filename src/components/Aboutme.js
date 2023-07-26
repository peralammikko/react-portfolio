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
                    <h1>Who dis?</h1>
                    <p>What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces.</p>
                    <div className="skillContainer">
                        <img className="skillImg" src={monke} />
                        <img className="skillImg" src={monke} />
                        <img className="skillImg" src={monke} />
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