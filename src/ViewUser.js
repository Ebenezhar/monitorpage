import React from 'react'
import { useParams } from 'react-router-dom';

function ViewUser() {
    let {id} = useParams();
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
        <div>ViewUser {id}</div>
        <div>Name: {users[id-1].name}</div>
    </>
  )
}

export default ViewUser;
