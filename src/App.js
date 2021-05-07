import {WorkoutDropdown} from "./components"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    document.body.style = 'background-color: #E7E9EB;';
   
  return (
    <div className="App">
        <div id="mainContentHolder">
        <h1 class="mainTitle"><a href="/" title="Back To Beginning" id="homeLink">Gym Tracker For Jacob</a></h1>
        <WorkoutDropdown/>
      
      </div>
    </div>
  );
}

export default App;
