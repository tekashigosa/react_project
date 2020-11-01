import React from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input, Alert, Breadcrumb, Card, Container, Row, Col}
from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
 <div className="App">
     <header className="App-header">
       <Container>
     <Form>
       <Row>
         <Col md>
         <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Col>
 
<Col md>
<Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="save informations" />
  </Form.Group>
</Col>
  
  <Button variant="primary" type="submit">
    Login
  </Button>
  </Row>
</Form>
       <Card style={{ color: "#000"}}>
         <Card.Img  src="https://img.favpng.com/7/8/7/gmail-logo-email-google-png-favpng-J7uHBJS0pqty1nQ9cTew2yd6J_t.jpg" />
         <Card.Body>

         </Card.Body>
         <Card.Title>
           Welcome To Gmail
         </Card.Title>
             <button variant="primary">Read More</button>
       </Card>
       <Breadcrumb>
        <Breadcrumb.Item>killlian12345@gmail.com</Breadcrumb.Item>
        <Breadcrumb.Item>jùaizaoif@gmail.com</Breadcrumb.Item>
        <Breadcrumb.Item>vfooik@gmail.com</Breadcrumb.Item>
       </Breadcrumb>

       <Alert variant="primary">saved accounts</Alert>
       </Container>
       <Alert>do you have an account?</Alert>
       <button>sign up</button>
       
     </header>
   </div>
  );
}


export default App;
