import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Noticias from './Noticias.jsx';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import { useNavigate } from 'react-router-dom';
import noticia from '../data/Noticias.js';

function NoticiasDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const noticia = noticia.find((p) => p.id === parseInt(id));

  if (!noticia) {
    return (
      <Container className="my-5">
        <h1>Noticia no encontrada</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button variant="primary" onClick={() => navigate(`/Noticias`)}>
          Volver
        </Button>
      <Card>
        <Image src={noticia.image} alt={noticia.name} className="card-img-top" />
        <Card.Body>
          <Text variant="h2">{noticia.name}</Text>
          <Text variant="p">{noticia.description}</Text>
        </Card.Body>
        
      </Card>
    </Container>
  );
}

export default NoticiasDetails;