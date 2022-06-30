import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function ViewUser() {
    let { id } = useParams();
    console.log(id);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        let fetchData = async () => {
            let userData = await axios.get(`https://629040b2665ea71fe12f668b.mockapi.io/employee/${id}`)
            setUsers(userData.data);
            console.log("Data", userData);
        }
        fetchData();    
    }, [])


    return (
        <>

            <div className='container'>
                <h2>User Details</h2>
                <h4>User Id: {id}</h4>
                <h4>Name: {users.name}</h4>
                <h4>Position: {users.position}</h4>
                <h4>Age: {users.age}</h4>
                <h4>Office: {users.office}</h4>
                <h4>Start Date: {users.startDate}</h4>
                <h4>Salary: {users.salary}</h4>
            </div>

        </>
    )
}

export default ViewUser;
