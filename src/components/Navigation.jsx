import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const Navigation = () => {
  return (
    <div>
        <Navbar expand="lg" bg='danger' data-bs-theme="dark" className='d-flex flex-row justify-content-center align-items-center'>
            <Container style={{width:"50%", textAlign:"start"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Link className='link' to="/">&#127968; Home</Link>
                        <Link className='link' to="/contactpage">&#128210; Contacto</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Container style={{width:"50%"}} className='d-flex flex-row justify-content-end align-items-center'>
                <Navbar.Brand>Happy Cake &#127856;</Navbar.Brand>
            </Container> 
        </Navbar>
    </div>
  )
}

export default Navigation