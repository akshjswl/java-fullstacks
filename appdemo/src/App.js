// import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './component/FunctionalComponent';
import StateDemo from './component/state/StateDemo';
import Profile from './component/state/Profile';
import User from './component/Axios/User';
import "bootstrap/dist/css/bootstrap.css";
import Userinfo from './component/useeffect/Userinfo';
import Parent from './component/props/Parent';
import A from './component/propsdrilling/A';
import Parent1 from './component/contextapi/Parent1';
function App() {
  return (
    <div className="App">
      <h2>React app</h2>
      {/* <FunctionalComponent/> */}
      {/* <StateDemo/> */}
      {/* <User/> */}
      {/* <Userinfo/> */}
      {/* <Parent/> */}
      {/* <A/> */}
      <Parent1/>
    </div>
  );
}

export default App;
