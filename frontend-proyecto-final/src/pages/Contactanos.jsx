import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import navbar from "../pages/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoworlds from '../imgs/worlds.jpg';
import Carousel from 'react-bootstrap/Carousel';
import fncg2 from '../imgs/fncg2.jpg'
import Stack from 'react-bootstrap/Stack';
import { NavbarBrand } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import tarjetas from '../imgs/tarjetas.png'

const Contactanos = () => {
    const [name, setName] = useState();
  
    const navigate = useNavigate();
  
    const token = localStorage.getItem("token");
  
    useEffect(() => {
      if (token) {
        axios
          .get(`http://localhost:4000/user`, {
            headers: {
              token: token,
            },
          })
          .then(({ data }) => setName(data.nombre))
          .catch((error) => console.error(error));
      }
    }, [token]);
  
    return (
      <><div className="nav5"><div className="acom">
        <Navbar bg="dark" variant="dark">
          <Container>
            <div className="imgg">
              <Navbar.Brand href="welcome"><img
                src={logoworlds}
                width="60"
                height="70"
                alt="React Bootstrap logo" />
            </Navbar.Brand></div>
            <Nav className="n1a">
              <Nav.Link className="n1" href="https://lolesports.com/" target="_blank">LoL Esports</Nav.Link>
              <Nav.Link className="n2" href="quienessomos">Quienes Somos</Nav.Link>
              <Nav.Link className="n3" href="#features">Contactanos</Nav.Link>
              </Nav>
              <Nav className="nlog">
              <Nav.Link className="nlog" href="login">Cerrar Sesión</Nav.Link>
            </Nav>
          </Container>
        </Navbar></div><Container className="">
        </Container>

<Container  className="desc2">
    
<Figure className="tarjetas1">
      <Figure.Image
        alt="1920x1080"
        src={tarjetas}
      />    
    </Figure>

</Container>




        <Navbar className="footer2" variant="dark">
          <Container>
            <div className="imgg2">
            <Navbar.Brand href="welcome">
              <img
                src={logoworlds}
                width="60"
                height="70"
                alt="React Bootstrap logo" />
            </Navbar.Brand></div>
            <Nav  className="stak">
            <Stack gap={3}>
        <div><Nav.Link href="https://www.instagram.com/lolesports/" target="_blank">Instagram Bv</Nav.Link></div>
        <div><Nav.Link href="https://twitter.com/lolesports" target="_blank">Twitter 8v</Nav.Link></div>
        <div>Rumores LoL ©</div>
      </Stack>
              </Nav>
          </Container>
        </Navbar>
        </div></>
        
    );
  };
  
  export default Contactanos;
  