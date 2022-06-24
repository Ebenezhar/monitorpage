import React from 'react'
import Sidebar from './sidebar';
import NavBar from './NavBar';
import {
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