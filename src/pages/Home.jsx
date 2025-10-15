import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/pages/Global.css";
import Text from '../components/atoms/Text';
import "../styles/pages/Home.css";
import Imagen from "../assets/img/FotoPortafolio.webp";

function Home() {
  return (
    <Container className="mambo">
      <div className='logo'>
        <img src={Imagen} alt='ImagenLogo'></img>
      </div>
      <Text variant= 'h1' className= 'titulo-main'>Welcome! a mi gran portafolio</Text>
      <Text variant= 'p' className= 'descripcion-main'>Bienvenidos a mi portafolio donde sabran mas de mi y mis proyectos</Text>
    </Container>
  );
}

export default Home;