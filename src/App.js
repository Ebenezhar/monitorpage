import './App.css';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreateUser from './CreateUser';
import Portal from './Portal';
import Login from './Login';
import ViewUser from './ViewUser';
import AddProduct from './AddProduct';
import EditUser from './EditUser';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Portal' element={<Portal />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
          <Route path="Users/CreateUser" element={<CreateUser />} />
          <Route path="Users/ViewUser/:id" element ={<ViewUser/>}/>
          <Route path="Users/EditUser/:id" element ={<EditUser/>}/>
          <Route path="Products" element={<Products />} />
          <Route path="Products/AddProducts" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter >


  );
}

export default App;
