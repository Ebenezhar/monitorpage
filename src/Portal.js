import React from 'react'
import Sidebar from './sidebar';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Users from './Users';
import ReactDOM from "react-dom/client";
import Products from './Products';
import CreateUser from './CreateUser';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

function Portal() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portal