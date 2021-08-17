import React from 'react';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardTitle
} from 'reactstrap';
const CustomerFormInput = props => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Title
        </Label>
        <Col sm={2}>
          <Input
            type="text"
            name="titleCode"
            id="titleCode"
            placeholder="Title Code"
          />
        </Col>
        <Col sm={8}>
          <Input
            type="text"
            name="titleName"
            id="titleName"
            placeholder="Title Name"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="firstname" sm={2}>
          Firstname
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastname" sm={2}>
          Lastname
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
          />
        </Col>
      </FormGroup>
    </Form>
  );
};

export { CustomerFormInput };
