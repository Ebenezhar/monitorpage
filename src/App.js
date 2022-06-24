import './App.css';
import Sidebar from './sidebar';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Users from './Users';
import ReactDOM from "react-dom/client";
import Products from './Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateUser from './CreateUser';
import Portal from './Portal';
import Login from './Login';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Portal' element={<Portal />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/Create" element={<CreateUser />} />
          <Route path="Products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter >


  );
}

export default App;
