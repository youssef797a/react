import React from "react"
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

const app = () =>{
  return (
    <React.Fragment>
      <div className="app">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="cards">
          <Card className ="allcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-gamer-lenovo-legion-pro-7-16irx8h-i9-13e-gen-32go-rtx-4080.jpg" />
            <Card.Body>
              <Card.Title>PC PORTABLE GAMER LENOVO LÉGION PRO 7 16IRX8H I9 13È GÉN 32GO RTX 4080</Card.Title>
              <Card.Text>
              Écran 16" WQXGA IPS, 240 Hz - Processeur: Intel Core i9-13900HX (Up to 5,40 GHz Turbo max , 36 Mo de mémoire cache, 24-Cores) - Système d'exploitation: Windows
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className ="allcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/g/p/gp68-hx-13vg.jpg" />
            <Card.Body>
              <Card.Title>PC PORTABLE GAMER MSI VECTOR GP68HX 13VG I7 13È GÉN 16GO RTX 4070</Card.Title>
              <Card.Text>
              Écran 16 QHD+ IPS, 240 Hz - Processeur: Intel Core i7-13700HX (Up to 5.00 GHz Turbo max, 30 Mo de mémoire cache, 16-Cores) - Système d'exploitation: FreeDos - Mémoire RAM: 16 Go - Disque dur: 512Go SSD 
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card className ="allcard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-gamer-msi-raider-ge78hx-13vi-i9-13e-gen-16go-rtx-4090.jpg" />
            <Card.Body>
              <Card.Title>PC PORTABLE GAMER MSI RAIDER GE78HX 13VI I9 13È GÉN 16GO RTX 4090</Card.Title>
              <Card.Text>
              Écran 17" QHD+, IPS, 240 Hz - Processeur: Intel Core i9-13980HX (up to 5,60 GHz Turbo max, 36 Mo de mémoire cache, 24-Cores) - Système d'exploitation: FreeDos - Mémoire RAM: 16 Go DDR5 - Disque dur: 1 To SSD - Carte graphique: NVIDIA GeForce RTX 4090 
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
    </React.Fragment>
  )
}
export default app