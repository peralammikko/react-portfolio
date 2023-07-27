import { Toolbar, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h4" href="/">
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {md: 'flex'}}}>
                        <Button ></Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;