import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const pathToTitle = {
    "cableCross": "Cable Cross",
    "declinePress":"Decline Press",
    "benchPress":"Bench Press",
    "inclineDumbellPress":"Incline Dumbell Press",
    "dips":"Dips",
    "pullUps":"Pull Ups",
    "bentoverRows":"Bentover Rows",
    "cableRow": "Cable Row",
    "reverseGrip":"Reverse Grip Pulldown",
    "backExtension":"Back Extension",
    "russianTwist":"Russian Twist",
    "benchDips":"Bench Dips",
    "closeGripBench":"Close-Grip Bench Press",
    "dumbellCurl":"Dumbbell Bicep Curl",
    "tricepPulldown":"Tricep Pull Down",
    "ezBarCurl":"EZ Bar Curl",
    "pushUps":"Push Ups",
    "seatedDumbell":"DvSeated Dumbell Press",
    "bentoverDelt":"Bent-Over Delt Raise",
    "sideLateralRaise":"Side Lateral Raise",
    "uprightRows":"Upright Rows",
    "crunches":"Crunches",
    "squats":"Squats",
    "legRaises":"Leg Raises",
    "calfRaises":"Calf Raises"

}

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
      var correctTitle = pathToTitle[lastHalfOfPath];
     return correctTitle;
  }


  render() {
    return (
      <div>
          <h2 class="exerciseHeader">{this.state.exercise}</h2>
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
