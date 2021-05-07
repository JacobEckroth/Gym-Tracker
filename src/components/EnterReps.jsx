import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

class EnterReps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formGroupFifteen">
            <Form.Label>15 Reps</Form.Label>
            <Form.Control type="15Reps" placeholder="Enter Weight of 15 reps" />
          </Form.Group>
          <Form.Group controlId="formGroupTen">
            <Form.Label>10 Reps</Form.Label>
            <Form.Control type="10Reps" placeholder="Enter Weight of 10 reps" />
          </Form.Group>
          <Form.Group controlId="formGroupFive">
            <Form.Label>5 Reps</Form.Label>
            <Form.Control type="5Reps" placeholder="Enter Weight of 5 reps" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EnterReps;
