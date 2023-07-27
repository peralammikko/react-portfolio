import { Outlet, Link } from "react-router-dom";
import '../pages/style.css';
import { Button } from "@mui/material";

const Layout = () => {
    return (
    <>
        <div className="homepagebackground">
            <div className="headerContainer">
                <div className="headerText">Header logo</div>
                    <ul className="headerLinks">
                        <li><Link className="headerLink" to='/'>Home</Link></li>
                        <li><Link className="headerLink" to='/aboutme'>About me</Link></li>
                        <li><Link className="headerLink" to='/projects'>Projects</Link></li>
                        <li><Link className="headerLink" to='/sandbox'>Sandbox</Link></li>
                        <li><Button className="resumeButton" onClick={() => window.open('https://drive.google.com/file/d/1ZqtZrWvcUDI5Fvfcof2xx4jj6UGe57E_/view?usp=sharing')}>Resume</Button></li>
                    </ul>
            </div>
        </div>
        <Outlet />
    </>
    )
}

export default Layout;