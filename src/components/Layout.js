import { Outlet, Link } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

const Layout = () => {
    return (
    <>
        <div className="homepagebackground">
            <div className="header">
            <div className="headertext">Header logo</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/sandbox'>Sandbox</Link></li>
            </ul>
            </div>
        </div>
        <Outlet />
    </>
    )
}

export default Layout;