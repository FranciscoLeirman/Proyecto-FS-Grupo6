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
import not1 from '../imgs/noti1.jpg'
import noti3 from '../imgs/noti3.jpg'


const Welcome = () => {
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
    <><div className="nav1"><div className="acom">
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="imgg">
          <Navbar.Brand href="welcome">
            <img
              src={logoworlds}
              width="60"
              height="70"
              alt="Logo" />
          </Navbar.Brand></div>
          <Nav className="n1a">
            <Nav.Link className="n1" href="https://lolesports.com/" target="_blank">LoL Esports</Nav.Link>
            <Nav.Link className="n2" href="quienessomos">Quienes Somos</Nav.Link>
            <Nav.Link className="n3" href="contactanos">Contáctanos</Nav.Link>
            </Nav>
            <Nav className="nlog">
            <Nav.Link className="nlog" href="login">Cerrar Sesión</Nav.Link>
          </Nav>
        </Container>
      </Navbar></div><Container className=""><Carousel className="crsl">
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={fncg2}
            alt="First slide" /><Carousel.Caption>
            <p className="noticia1">Los favoritos europeos quedaron fuera luego de caer ante NA.<br></br>Perdieron contra C9 y EG, equipos que no habian ganado ni un
            partido hasta el momento.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={not1}
            alt="Second slide" /><Carousel.Caption>
            <p className="noticia2">EL JUGADOR KOREANO RECLAMA EL PUESTO COMO EL MEJOR MID-LANER LUEGO DE SUS DESTACABLES PARTIDAS EN LO QUE VA DE MUNDIAL <br></br>T1 SE CONSAGRA
            COMO LIDER DEL GRUPO A.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={noti3}
            alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </Container>
      <Navbar className="footer" variant="dark">
        <Container>
          <div className="imgg2">
          <Navbar.Brand href="welcome">
            <img
              src={logoworlds}
              width="60"
              height="70"
              alt="React Bootstrap logo" />
          </Navbar.Brand> </div>
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

export default Welcome;
