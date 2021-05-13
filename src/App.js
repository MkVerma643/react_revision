import './App.css';
import {BrowserRouter, Route, HashRouter} from "react-router-dom"
import Dom from './Dom'
import Fcomponent from './Fcomponent'
import ClassComponent from './ClassComponent'
import ParentComponent from "./ParentComponent"
import Uncontrolled from "./Uncontrolled"
import Controlled from "./Controlled"
import ReactHooks from './ReactHooks'
import LifeCycleA from './LifeCycleA';
import User from './User';
import Promises from './Promises';
import AsyncAwait from './AsyncAwait';
import Header from './Header';
import AxiosList from './AxiosList';
import ClickCounter from './ClickCounter';
import HoverCount from './HoverCount';
import WithCounterHOC from './WithCounterHOC';

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
      {/* <Dom></Dom>
      <Fcomponent></Fcomponent>
      <ClassComponent></ClassComponent> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Uncontrolled></Uncontrolled>
      <Controlled></Controlled> */}
      {/* <ReactHooks></ReactHooks> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <User name={full_name}></User> */}
      {/* <User alert={SendDataToUser}></User>
      <User alert={GetDataFromUser}></User> */}
      {/* <Promises></Promises> */}
      {/* <AsyncAwait></AsyncAwait> */}
      

      <BrowserRouter>
        <Header></Header>
       <div>
          <Route path="/Dom" component={Dom} />
          <Route path="/Fcomponent" component={Fcomponent} />
          <Route path="/ClassComponent" component={ClassComponent} />
          <Route path="/ParentComponent" component={ParentComponent} />
          <Route path="/Uncontrolled" component={Uncontrolled} />
          <Route path="/Controlled" component={Controlled} />
          <Route path="/ReactHooks" component={ReactHooks} />
          <Route path="/LifeCycleA" component={LifeCycleA} />
          {/* <Route path="/User/:full_name"  render={full_name} component={User} /> */}
          <Route path="/User/:send" render={SendDataToUser} component={User} />
          <Route path="/User/:get" render={GetDataFromUser} component={User} />
          <Route path="/Promises" component={Promises} />
          <Route path="/AsyncAwait" component={AsyncAwait} />
          <Route path="/AxiosList" component={AxiosList} />
          <Route path="/WithCounterHOC" component={WithCounterHOC} />
          <Route path="/ClickCounter" component={ClickCounter} />
          <Route path="/HoverCount" component={HoverCount} />


      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
