import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <NavBar>
        <Container>
            <NavBar.Brand href="#Homepage">Home</NavBar.Brand>
            <Nav className="navbarLinks">
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Sandbox">Sandbox</Nav.Link>
                <Nav.Link href="#Resume">Resume</Nav.Link>
            </Nav>
        </Container>
        </NavBar>
    )
}

export default Navbar;