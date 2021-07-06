import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import './NavBar.css';
import logo from './log.svg';
function NavBar() {
    return (
        <Navbar className="navwrap" expand="lg">
            <NavLink to="/" ><img src={logo} alt="Three trees logo" style={{ height: 70, width: 50 }}/></NavLink>
<NavLink to="/" className="navlinklogo"><span className="fletter">G</span>o <span className="fletter">G</span>reen <span className="fletter">P</span>akistan</NavLink>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/home" className="navlink">Home</NavLink>
      <NavLink to="/adopt" className="navlink">Adopt</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar
