import { Card, CardMedia, CardContent, Button, Typography, CardActions } from "@mui/material";
import '../pages/style.css';

function ProjectCard(props) {
    return (
        <Card sx={{maxWidth: 350}}>
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
            <CardActions>
                <Button className="cardButton" size="small">View</Button>
                <Button className="cardButton" size="small">Github</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;