import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{marginLeft:"300px"}}>
      <Container>
        <Row>
          <Col><Link to='/register'><Button variant="primary">Créer un utilisateur</Button></Link></Col>
          <Col><Link to='/list' ><Button variant="primary">Liste des utilisateurs</Button></Link></Col>
          <Col><Link to='/blog' ><Button variant="primary"> Blog</Button></Link></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;