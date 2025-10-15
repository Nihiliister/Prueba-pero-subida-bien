import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Text from '../components/atoms/Text';
import "../styles/pages/Noticias.css";
import NoticiaCard from '../components/organisms/NoticiaCard';
import noticia from '../data/Noticias';

function Noticias() {
  return (
    <Container className="not">
      <Text variant='h2' className= 'Noticia'> Noticias </Text>
      <Row>
        {noticia.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
        ))}
      </Row>
    </Container>
  );
}

export default Noticias;