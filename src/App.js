import './App.css';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserInput from './components/UserInput';
import Lists from './components/Lists';
import { useState } from "react";
function App() {
  let [isStart, setisStart] = useState("container puff-in-center splash_greetings");
  let startListing = () => {
    document.getElementById("splasScreen").classList.remove("puff-in-center");
    document.getElementById("splasScreen").classList.add("slide-out-blurred-left");
  }

  return (
    <div className="App h-100">
      <div id="splasScreen" className="d-flex align-items-center splashscreen w-100 h-100">
        <div className={isStart}>
          <h1 className="text-center">ToDo Me!</h1>
          <p className="text-center">A simple todo list application.</p>
          <div className="text-center">
            <span className="btn btn-primary text-dark" onClick={startListing}>Start Listing!</span>
          </div>
        </div>
      </div>

      <div id="main w-100 h-100">
        <div className='container h-100'>
          <UserInput />
        </div>

        <div className='container mt-3 h-100'>
          <Lists />
        </div>
      </div>
    </div>
  );
}
export default App;
