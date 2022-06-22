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


function App() {
  return (
    <BrowserRouter>

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Users/Create" element={<CreateUser />} />
                <Route path="/Products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    
    </BrowserRouter >
 

  );
}

export default App;
