import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    let fetchData = async () => {
        let userData = await axios.get("https://629040b2665ea71fe12f668b.mockapi.io/employee")
        setUsers(userData.data);
     }

    let handleDelete = async(id) => {
        console.log(id);
        let ask = window.confirm('Are you sure you want to delete this employee?');
        if(ask){
            await axios.delete(`https://629040b2665ea71fe12f668b.mockapi.io/employee/${id}`);
            fetchData();
        }
    }  

    return (
        <>  
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link to="/portal/Users/CreateUser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"><i class="fa-solid fa-user"></i>   Create User</Link>

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
                                    <td>{user.age}</td>
                                    <td>{user.startDate}</td>
                                    <td>${user.salary}</td>
                                    <td>
                                        <Link to={`/portal/Users/ViewUser/${user.id}`} className='btn btn-primary mr-1'>View</Link>
                                        <Link to ={`/portal/Users/EditUser/${user.id}`} className='btn btn-info mr-1'>Edit</Link>
                                        <button onClick={() => handleDelete(user.id)} className='btn btn-danger mr-1'>Delete</button>
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