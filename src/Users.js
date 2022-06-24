import React from 'react'
import { Link } from "react-router-dom";

function Users() {
    let users = [
        {
            id:1,
            name:"Tiger Nixon",
            position:"System Architect",
            office: "Edinburgh",
            Age:61,
            StartDate:"2011/04/25",
            salary:"320,800", 
        },
        {
            id:2,
            name:"Garrett Winters",
            position:"Accountant",
            office: "Tokyo",
            Age:63,
            StartDate:"2011/07/25",
            salary:"170,750", 
        },
        {
            id:3,
            name:"Ashton Cox",
            position:"Junior Technical Author",
            office: "San Francisco",
            Age:66,
            StartDate:"2009/01/12",
            salary:"86,000", 
        },

    ]
    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/portal/Users/CreateUser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i
                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                users.map((user) => {
                                    return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.position}</td>
                                    <td>{user.office}</td>
                                    <td>{user.Age}</td>
                                    <td>{user.StartDate}</td>
                                    <td>${user.salary}</td>
                                    <td>
                                        <Link to={`/portal/Users/ViewUser/${user.id}`} className='btn btn-primary mr-1'>View</Link>
                                        <button className='btn btn-info mr-1'>Edit</button>
                                        <button className='btn btn-danger mr-1'>Delete</button>
                                    </td>
                                </tr>
                                })
                                }
                                                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users;