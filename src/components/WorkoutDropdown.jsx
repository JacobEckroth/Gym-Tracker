import React, { Component } from "react";
import EnterReps from "./EnterReps"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
class WorkoutDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: window.location.pathname,
      lookupTable :{
          "/":<div>
          <DropdownButton id="dropdown-basic-button" title="Pick Exercise Category">
            <Dropdown.Item href="/chest">Chest</Dropdown.Item>
            <Dropdown.Item href="/back">Back</Dropdown.Item>
            <Dropdown.Item href="/arms">Arms</Dropdown.Item>
            <Dropdown.Item href="/shoulders">Shoulders</Dropdown.Item>
            <Dropdown.Item href="/legs-abs">Legs/Abs</Dropdown.Item>
          </DropdownButton>
        </div>,
         "/chest":<div>
         <DropdownButton id="dropdown-basic-button" title="Pick Chest Exercise">
           <Dropdown.Item href="/chest/declinePress">Decline Press</Dropdown.Item>
           <Dropdown.Item href="/chest/benchPress">Bench Press</Dropdown.Item>
           <Dropdown.Item href="/chest/cableCross">Cable Cross</Dropdown.Item>
           <Dropdown.Item href="/chest/inclineDumbellPress">Incline Dumbell Press</Dropdown.Item>
         </DropdownButton>
       </div>,
       "/back":<div>
       <DropdownButton id="dropdown-basic-button" title="Pick Back Exercise">
         <Dropdown.Item href="/back/bentoverRows">Bentover Rows</Dropdown.Item>
         <Dropdown.Item href="/back/reverseGrip">Reverse Grip Pulldown</Dropdown.Item>
         <Dropdown.Item href="/back/cableRow">Cable Row</Dropdown.Item>
         <Dropdown.Item href="/back/backExtension">Back Extension</Dropdown.Item>
       </DropdownButton>
     </div>,
     "/arms":<div>
     <DropdownButton id="dropdown-basic-button" title="Pick Arms Exercise">
       <Dropdown.Item href="/arms/closeGripBench">Close-Grip Bench Press</Dropdown.Item>
       <Dropdown.Item href="/arms/dumbellCurl">Dumbell Bicep Curl</Dropdown.Item>
       <Dropdown.Item href="/arms/tricepPulldown">Tricep Pull Down</Dropdown.Item>
       <Dropdown.Item href="/arms/ezBarCurl">EZ Bar Curl</Dropdown.Item>
     </DropdownButton>
   </div>,
   "/shoulders":<div>
   <DropdownButton id="dropdown-basic-button" title="Pick Shoulder Exercise">
     <Dropdown.Item href="/shoulders/seatedDumbell">Seated Dumbell Press</Dropdown.Item>
     <Dropdown.Item href="/shoulders/bentoverDelt">Bent-Over Delt Raise</Dropdown.Item>
     <Dropdown.Item href="/shoulders/sideLateralRaise">Side Lateral Raise</Dropdown.Item>
     <Dropdown.Item href="/shoulders/uprightRows">Upright Rows</Dropdown.Item>
   </DropdownButton>
 </div>,
    "/legs-abs":<div>
    <DropdownButton id="dropdown-basic-button" title="Pick Legs/Abs Exercise">
    <Dropdown.Item href="/legs-abs/crunches">Crunches</Dropdown.Item>
    <Dropdown.Item href="/legs-abs/squats">Squats</Dropdown.Item>
    <Dropdown.Item href="/legs-abs/legRaises">Leg Raises</Dropdown.Item>
    <Dropdown.Item href="/legs-abs/calfRaises">Calf Raises</Dropdown.Item>
    </DropdownButton>
    </div>
      }
    };
  }

  render() {
    if(!this.state.lookupTable[this.state.pathName]){
        return <EnterReps/>
    }else{
        return this.state.lookupTable[this.state.pathName];
    }
   
  }
}

export default WorkoutDropdown;
