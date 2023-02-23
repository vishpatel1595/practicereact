import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
const navItems = [{ title: "Home", to: "home" }, { title: "About Us", to: "Aboutus" }, { title: "Gallary", to: "Gallary" }, { title: "Portfolio", to: "Portfolio" }, { title: "Contact Us", to: "Contactus" }];
function Navbar1(props) {
    const nav_item = navItems.map(item => <NavLink className="temp nav-link" to={item.to}>{item.title}</NavLink>)
    return (
        <Navbar collapseOnSelect expand="lg" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >     
            <Container>
                <Navbar.Brand to="#home">V4</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto" key="{nav_item}">
                        {nav_item}
                    </Nav>
                    <div className="">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Enable Dark Mode"
                            className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}
                            onClick={props.toggleMode}/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbar1;