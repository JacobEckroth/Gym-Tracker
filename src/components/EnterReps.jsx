import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

class EnterReps extends Component {
  constructor(props) {
    super(props);
    this.state={
        exercise:this.setUpTitle()
    }
  
  }

  setUpTitle(){
      var currentPathName = window.location.pathname;
      var lastHalfOfPath = currentPathName.substring(currentPathName.lastIndexOf('/') + 1);
      console.log(lastHalfOfPath);
        return lastHalfOfPath;
  }


  render() {
    return (
      <div>
          <h1>Exercise: {this.state.exercise}</h1>
        <Form>
          <Form.Group controlId="formGroupFifteen">
            <Form.Label>1st set</Form.Label>
            <Form.Control type="Set1" placeholder="Enter Weight of first set" />
          </Form.Group>
          <Form.Group controlId="formGroupTen">
            <Form.Label>2nd set</Form.Label>
            <Form.Control type="Set2" placeholder="Enter Weight of second set" />
          </Form.Group>
          <Form.Group controlId="formGroupFive">
            <Form.Label>3rd set</Form.Label>
            <Form.Control type="Set3" placeholder="Enter Weight of third set" />
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
