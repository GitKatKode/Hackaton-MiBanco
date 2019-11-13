import React, { useState} from 'react';
import { Form, Col, InputGroup, Button} from 'react-bootstrap'

const Teka = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>GERENTE TERRITORIO</Form.Label>
          <Form.Control
            required
            type="text"

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>SUPERVISOR REGIONAL</Form.Label>
          <Form.Control
            required
            type="text"

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <Form.Label>EJECUTIVO</Form.Label>
          <InputGroup>
         
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="1" controlId="validationCustom03">
          <Form.Label>MONTO CUOTA</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="1" controlId="validationCustom04">
          <Form.Label>N° DE CUOTA</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="1" controlId="validationCustom05">
          <Form.Label>FECHA DE INICIO</Form.Label>
          <Form.Control type="text" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="1" controlId="validationCustom06">
          <Form.Label>FECHA DE VCTO.</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button variant="success" type="submit">GUARDAR</Button>
    </Form>
  );
}
export default Teka;
