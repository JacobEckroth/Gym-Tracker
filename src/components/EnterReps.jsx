import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const pathToTitle = {
  cableCross: "Cable Cross",
  declinePress: "Decline Press",
  benchPress: "Bench Press",
  inclineDumbellPress: "Incline Dumbell Press",
  dips: "Dips",
  pullUps: "Pull Ups",
  bentoverRows: "Bentover Rows",
  cableRow: "Cable Row",
  reverseGrip: "Reverse Grip Pulldown",
  backExtension: "Back Extension",
  russianTwist: "Russian Twist",
  benchDips: "Bench Dips",
  closeGripBench: "Close-Grip Bench Press",
  dumbellCurl: "Dumbbell Bicep Curl",
  tricepPulldown: "Tricep Pull Down",
  ezBarCurl: "EZ Bar Curl",
  pushUps: "Push Ups",
  seatedDumbell: "DvSeated Dumbell Press",
  bentoverDelt: "Bent-Over Delt Raise",
  sideLateralRaise: "Side Lateral Raise",
  uprightRows: "Upright Rows",
  crunches: "Crunches",
  squats: "Squats",
  legRaises: "Leg Raises",
  calfRaises: "Calf Raises",
};

class EnterReps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: this.setUpTitle(),
      amountOfSets: ["1", "2", "3","4","5"],
    };
    this.handleSetsChange = this.handleSetsChange.bind(this)
  }

  setUpTitle() {
    var currentPathName = window.location.pathname;
    var lastHalfOfPath = currentPathName.substring(
      currentPathName.lastIndexOf("/") + 1
    );
    console.log(lastHalfOfPath);
    var correctTitle = pathToTitle[lastHalfOfPath];
    return correctTitle;
  }

  handleSetsChange(e){
    console.log(e.target.value);
    var sets = Number(e.target.value);
    var newSets = [];
    for(var i = 1; i <=sets; i++){
        newSets.push(String(i))
    }
    this.setState({
        amountOfSets:newSets
    })
    
  }

  render() {
    
    return (
      <div>
        <h2 class="exerciseHeader">{this.state.exercise}</h2>
        <Form>
            <Row>
                <Col>
                <Form.Group controlId={"formGroupSets"}>
                  <Form.Label>Sets</Form.Label>
                  <Form.Control
                    onChange={this.handleSetsChange}
                    value={this.state.amountOfSets.length}
                    placeholder="Enter Amount Of Sets"
                    type="number"
                  />
                </Form.Group>
                </Col>
            </Row>
          {this.state.amountOfSets.map(setNumber => {
              return(
            <Row key={setNumber}>
              <Col>
                <Form.Group controlId={"formGroupSets" + { setNumber }}>
                  <Form.Label>Set {setNumber}</Form.Label>
                  <Form.Control
                    type="Set"
                    placeholder="placeholder"
                    type="number"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={"formGroupReps" + { setNumber }}>
                  <Form.Label>Reps</Form.Label>
                  <Form.Control
                    type="Reps"
                    placeholder="Enter Amount Of Reps"
                    type="number"
                  />
                </Form.Group>
              </Col>
            </Row>
              )
          })}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default EnterReps;
