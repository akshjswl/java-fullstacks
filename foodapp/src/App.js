// import logo from './logo.svg';
import './App.css';
import AddFood from './component/AddFood';
import DeleteFood from './component/DeleteFood';
import FoodList from './component/FoodList';
import Nav from './component/Nav';
import { Routes,Route } from 'react-router-dom';
import UpdateFood from './component/UpdateFood';
import SearchFood from './component/SearchFood';
import Contact from './component/Contact';
import "bootstrap/dist/css/bootstrap.css";
import NavClient from './component/NavClient';
import AddOrder from './component/AddOrder';
import Billing from './component/Billing';
import SearchFoodClient from './component/SearchFoodClient';
import FoodListClient from './component/FoodListClient';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/navclient' element={<NavClient/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/addfood' element={<AddFood/>}/>
        <Route path='/foodlist' element={<FoodList/>}/>
        <Route path='/delfood' element={<DeleteFood/>}/>
        <Route path='/updfood' element={<UpdateFood/>}/>
        <Route path='/sfood' element={<SearchFood/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/foodlistclient' element={<FoodListClient/>}/>
        <Route path='/sfoodclient' element={<SearchFoodClient/>}/>
        <Route path='/addorder' element={<AddOrder/>}/>
        <Route path='/billing' element={<Billing/>}/>
        </Routes>
    </div>
  );
}

export default App;
