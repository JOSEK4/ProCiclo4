import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import './login.css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        usuario: " ",
        pass: " ",
    };

  }
  iniciarSesion(){
    alert(`Usuario: ${this.state.usuario} - Contraseña: ${this.state.pass}`);

  }
  
  render() {
    return (
      <Container id="login-container" >
        <Row>
          <Col>
            <Row>
            <h2> Iniciar sesion </h2>
            </Row>
            
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
            >   
                <Form>
                  <Form.Group>
                    <Form.Label >Usuario</Form.Label>
                    <Form.Control
                      oneChangr={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                    {this.state.usuario}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label >
                      Contraseña
                    </Form.Label>
                    <Form.Control
                        type="password"
                      oneChangr={(e) =>
                        this.setState({ pass: e.target.value })
                      }
                    />
                    {this.state.pass}
                  </Form.Group>
                  
                  <Button 
                    variant="primary"
                     
                    onclick= {() => {
                        this.iniciarSesion();
                    }}
                 >
                
                    Iniciar Seccion
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
