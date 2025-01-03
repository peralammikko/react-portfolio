import { Outlet, Link } from "react-router-dom";
import '../pages/style.css';
import { Button } from "@mui/material";

const Layout = () => {
    return (
    <>
        <div className="headerBackground">
            <div className="headerContainer">
                <Link className="headerText" to='/'>mperala</Link>
                    <ul className="headerLinks">
                        <li><Link className="headerLink" to='/'>Home</Link></li> //
                        <li><Link className="headerLink" to='/aboutme'>About Me</Link></li> //
                        <li><Link className="headerLink" to='/projects'>Projects</Link></li>
                        <li><Button className="resumeButton" onClick={() => window.open('https://drive.google.com/file/d/10KVXYgcGjm4XEI4yCXs6grxEmhfD_W9F/view?usp=sharing')}>Resume</Button></li>
                    </ul>
            </div>
        </div>
        <Outlet />
    </>
    )
}

export default Layout;
