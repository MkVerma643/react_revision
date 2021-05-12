import logo from './logo.svg';
import './App.css';
import Dom from './Dom'
import Fcomponent from './Fcomponent'
import ClassComponent from './ClassComponent'
import ParentComponent from "./ParentComponent"
import Uncontrolled from "./Uncontrolled"
import Controlled from "./Controlled"
import ReactHooks from './ReactHooks'
import LifeCycleA from './LifeCycleA';
import User from './User';

function App() {
  let full_name="Mukesh Verma"
  function SendDataToUser(){
    alert("Alert from Parent Class App");
  }
  function GetDataFromUser(data){
    alert(data);
  }

  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} alt="Logo" className="App-logo" width="250px"></img>
    <h1 className="App-title">Mukesh Verma</h1>
    </header>
      {/* <Dom></Dom>
      <Fcomponent></Fcomponent>
      <ClassComponent></ClassComponent> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Uncontrolled></Uncontrolled>
      <Controlled></Controlled> */}
      {/* <ReactHooks></ReactHooks> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <User name={full_name}></User> */}
      <User alert={SendDataToUser}></User>
      <User alert={GetDataFromUser}></User>
      

    </div>
  );
}

export default App;
