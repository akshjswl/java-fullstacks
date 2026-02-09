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
import Main from './component/condrend/Main';
import { Routes,Route } from 'react-router-dom';
import Nav from './component/route/Nav';
import Product from './component/nestedrouting/Product';
import Electronics from './component/nestedrouting/Electronics';
import Jewellery from './component/nestedrouting/Jewellery';
import Retail from './component/nestedrouting/Retail';
import Garment from './component/nestedrouting/Garment';

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
      {/* <Parent1/> */}
      {/* <Main/> */}
      <Nav/>
      <Routes>
        <Route path='/state' element={<StateDemo/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/props' element={<Parent/>}/>
        <Route path='/pdrilling' element={<A/>}/>
        <Route path='/context' element={<Parent1/>}/>
        <Route path='/Axios' element={<User/>}/>
        <Route path='/useeffect' element={<Userinfo/>}/>
        <Route path='/crend' element={<Main/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='electronics' element={<Electronics/>}/>
          <Route path='retails' element={<Retail/>}/>
          <Route path='garments' element={<Garment/>}/>
          <Route path='jewellery' element={<Jewellery/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
