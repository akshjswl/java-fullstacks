// import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './component/FunctionalComponent';
import StateDemo from './component/state/StateDemo';
import Profile from './component/state/Profile';
import User from './component/Axios/User';
import "bootstrap/dist/css/bootstrap.css";
import Userinfo from './component/useeffect/Userinfo';
function App() {
  return (
    <div className="App">
      <h2>React app</h2>
      {/* <FunctionalComponent/> */}
      {/* <StateDemo/> */}
      {/* <User/> */}
      <Userinfo/>
    </div>
  );
}

export default App;
