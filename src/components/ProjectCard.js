import { Card, CardMedia, CardContent, Button, Typography, CardActions } from "@mui/material";
import '../pages/style.css';

function ProjectCard(props) {
    return (
        <Card 
            sx={{maxWidth: 350, height: 400, boxShadow: 5} } className="project-card-view">
            <CardMedia
                sx={{height: 200}}
                image={props.imgPath}>
            </CardMedia>
            <CardContent>
                <Typography variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions className="cardButtonContainer">
                <Button
                    className="cardButton"
                    size="large"
                    onClick={()=>window.open(props.demolink)}>
                    Demo
                </Button>
                <Button 
                    className="cardButton" 
                    size="large"
                    onClick={()=>window.open(props.gitlink)}>
                    Github
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;